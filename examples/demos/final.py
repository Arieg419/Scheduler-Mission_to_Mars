import pulp
import json
import datetime
import sys

pulp.pulpTestAll()
#########constants################
NumOfWorkers = 100
NumOfShifts = 6
NumOfLocations = 4
NumOfDays = 7
Workers = list(range(1, NumOfWorkers + 1))  # xi, 1,2,...,100
Shift = list(range(1, NumOfShifts + 1))  # xj 1,2,...,6
Location = list(range(1, NumOfLocations + 1))  # xk 1,2,...,4
Day = list(range(1, NumOfDays + 1))  # xl 1,2,...,7
######################################

###########input####################
FriendlyWorkerShift = [] # input for workers who want to work  shift. for tuple (i,j), worker i wants to  work shift j
EnemyWorkers = []  # input for workers who can't work together. for tuple (i,j), worker i can't work with worker j
EnemyWorkerShift = []  # input for workers who can't work shifts. for tuple (i,j), worker i can't work shift j
InputData = open('data.txt', 'r')
for line in InputData:
    if line.split()[0] == "shiftLove":
        FriendlyWorkerShift.append((int(line.split()[1]),int(line.split()[2]),int(line.split()[3])))
    elif line.split()[0] == "workerFight":
        EnemyWorkers.append((int(line.split()[1]),int(line.split()[2])))
    else:
        EnemyWorkerShift.append((int(line.split()[1]),int(line.split()[2]), int(line.split()[3])))
##########################################

NumOfEnemyWorkerShift = len(EnemyWorkerShift)
NumOfEnemyWorkers = len(EnemyWorkers)
NumOfFriendlyWorkers = len(FriendlyWorkerShift)
NumOfWeakConstraints = list(range(1, NumOfEnemyWorkerShift + NumOfEnemyWorkers*NumOfDays*NumOfShifts + NumOfFriendlyWorkers + 1))  # ym
WeakWeight = 1
m = 1  # counter for ym - keeps up with the constraint number that we're on

"""
Defines Minimal Linear Program Problem
@param {string} "MissionToMars"
@param {min/max} "LpMinimize"
returns an LP problem
"""
prob = pulp.LpProblem("MissionToMars", pulp.LpMinimize)

"""
LpVariables.dicts
@param name The prefix to the name of each LP variable being creeated
@param [list of strings of the keys] indexes - A list of strings of the keys to the dictionary of LP variables, and the main part of the variable name itself TODO indexes are not strings!
@returns - a dictionary of LP variables,
"""
weakConstraints = pulp.LpVariable.dicts("IsSATWeak", NumOfWeakConstraints, 0, 1, pulp.LpBinary)
assign_vars = pulp.LpVariable.dicts("IsWorking",
     [(i, j, k, l) for i in Workers
                         for j in Shift
                         for k in Location
                         for l in Day],
    0, 1, pulp.LpBinary)


"""
Defining LpProblem
@param StrongWeight === 10
@param strongConstraints[i] is like x1, x2, x27, ...
"""
prob += pulp.lpSum((WeakWeight*weakConstraints[j] for j in NumOfWeakConstraints))


"""******************************* STRONG CONSTRAINTS *******************************"""

# 1st constraint - for every day, every shift, and every location, there is a worker, 7 days * 6 shifts * 1 location * 2 workers, TODO 7*6*2
prob += pulp.lpSum(assign_vars[(i, j, k, l)] for i in Workers for j in Shift for l in Day for k in Location) ==  2*NumOfDays*NumOfShifts*NumOfLocations# i think its not 336

# 2nd constraint - a worker isn't at two locations at the same time
for i in Workers:
    for j in Shift:
        for l in Day:
            prob += pulp.lpSum(assign_vars[(i, j, k, l)] for k in Location) <= 1

# 3rd constraint - each shift, location, and day has exactly 2 workers
for k in Location:
    for j in Shift:
        for l in Day:
            prob += pulp.lpSum(assign_vars[(i, j, k, l)] for i in Workers) == 2

# 4th constraint - no two consecutive shifts
for i in Workers:
    for j in range(1, 6):  # we need shifts 1...5 and not 1...6 because of the j+1
        for l in Day:
            prob += pulp.lpSum(assign_vars[(i, j, k, l)] + assign_vars[(i, j+1, k, l)] for k in Location) <= 1

# 5th constraint - each worker must work at least once a week
for i in Workers:
    prob += pulp.lpSum(assign_vars[(i, j, k, l)] for j in Shift for k in Location for l in Day) >= 1

# 6th constraint- each worker can work  a maximum of 5 times a week TODO changed this to every worker, max 5 shifts
for i in Workers:
    prob += pulp.lpSum(assign_vars[(i, j, k, l)] for j in Shift for k in Location for l in Day) <= 4

""" ******************************* WEAK CONSTRAINTS ******************************* """

#7th constraint - worker  can't work in shift  - for constraint n and tuple  (i,j), worker i can't work shift j
for n in range(NumOfEnemyWorkerShift):
    prob += pulp.lpSum(assign_vars[(EnemyWorkerShift[n][0], EnemyWorkerShift[n][2], k, EnemyWorkerShift[n][1])] for k in Location) - NumOfDays*NumOfLocations * weakConstraints[m] <= 0
    m += 1

#8th constraint - two workers  can't work together- for constraint n and tuple  (i,j), worker i can't work with worker j
for n in range(NumOfEnemyWorkers):
    for j in Shift:
        for l in Day:
            prob += pulp.lpSum(assign_vars[(EnemyWorkers[n][0], j, k, l)] + assign_vars[(EnemyWorkers[n][1], j, k, l)] for k in Location) - 2*NumOfLocations* weakConstraints[m] <= 1
            m += 1

#9th constraint - worker prefers to work in shift  - for constraint n and tuple  (i,j), worker i wants to work shift j
for n in range(NumOfFriendlyWorkers):
    prob += pulp.lpSum(assign_vars[(FriendlyWorkerShift[n][0], FriendlyWorkerShift[n][2], k, FriendlyWorkerShift[n][1])] for k in Location) + NumOfDays*NumOfLocations *weakConstraints[m] >= 1
    m += 1

print "Before problem solved"
prob.solve()
print "After problem solved"

# The status of the solution is printed to the screen
print "Status:", pulp.LpStatus[prob.status]

# Finding Minimal Correcting Set
w = 0 #  amount of weak constraints that are not SAT
for i in NumOfWeakConstraints:
    if weakConstraints[i].varValue == 1: #Ym === 1
        w += 1
        print "Constraint ", i, " is not SAT "
print w


""" ******************************* UTILS FOR VIEWING RESULTS ******************************* """

shibutzDict = {}

shibutzDict["Sunday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Monday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Tuesday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Wednesday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Thursday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Friday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

shibutzDict["Saturday"] = {
    "A": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "B": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "C": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "D": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "E": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    },
    "F": {
        "Botanical": {
            "Workers": []
        },
        "Security": {
            "Workers": []
        },
        "Engineering": {
            "Workers": []
        },
        "Communication": {
            "Workers": []
        }
    }
}

def indexToDay(i):
    if i == 1:
        return "Sunday"
    if i == 2:
        return "Monday"
    if i == 3:
        return "Tuesday"
    if i == 4:
        return "Wednesday"
    if i == 5:
        return "Thursday"
    if i == 6:
        return "Friday"
    if i == 7:
        return "Saturday"

def indexToShift(i):
    if i == 1:
        return "A"
    if i == 2:
        return "B"
    if i == 3:
        return "C"
    if i == 4:
        return "D"
    if i == 5:
        return "E"
    if i == 6:
        return "F"

def indexToLocation(i):
    if i == 1:
        return "Botanical"
    if i == 2:
        return "Security"
    if i == 3:
        return "Engineering"
    if i == 4:
        return "Communication"
def json_serial(obj):
    """JSON serializer for objects not serializable by default json code"""

    if isinstance(obj, datetime.datetime):
        serial = obj.isoformat()
        return serial

def shiftStartToHour(shift):
    if shift == 1:
        return 0, 0
    if shift == 2:
        return 4, 0
    if shift == 3:
        return 8, 0
    if shift == 4:
        return 12, 0
    if shift == 5:
        return 16, 0
    if shift == 6:
        return 20, 0

def shiftEndToHour(shift):
    if shift == 1:
        return 4, 0
    if shift == 2:
        return 8, 0
    if shift == 3:
        return 12, 0
    if shift == 4:
        return 16, 0
    if shift == 5:
        return 20, 0
    if shift == 6:
        return 23, 59



def dayToDate(day, shift, SE):
    if SE == "start":
       s, e = shiftStartToHour(shift)
    else:
        s, e = shiftEndToHour(shift)
    if day == "Sunday":
        time = json_serial(datetime.datetime(2017, 1, 22, s, e))
        return time
    if day == "Monday":
        time = json_serial(datetime.datetime(2017, 1, 23, s, e))
        return time
    if day == "Tuesday":
        time = json_serial(datetime.datetime(2017, 1, 24, s, e))
        return time
    if day == "Wednesday":
        time = json_serial(datetime.datetime(2017, 1, 25, s, e))
        return time
    if day == "Thursday":
        time = json_serial(datetime.datetime(2017, 1, 26, s, e))
        return time
    if day == "Friday":
        time = json_serial(datetime.datetime(2017, 1, 27, s, e))
        return time
    if day == "Saturday":
        time = json_serial(datetime.datetime(2017, 1, 28, s, e))
        return time


print "printing shibutz"

count = 0
histogram = [0] * 336
for i in Workers:
    for j in Shift:
        for k in Location:
            for l in Day:
                if assign_vars[(i, j, k, l)].varValue == 1:
                    count += 1
                    shibutzDict[indexToDay(l)][indexToShift(j)][indexToLocation(k)]["Workers"].append(i)
                    histogram[i] = histogram[i] + 1

events = []

workerStr = ""
for j in Shift:
    for k in Location:
        for l in Day:
                for worker in shibutzDict[indexToDay(l)][indexToShift(j)][indexToLocation(k)]["Workers"]:
                    workerStr += str(worker) + " "
                node = {
                    "title": indexToLocation(k) + " " + workerStr,
                    "start": dayToDate(indexToDay(l), j, "start"),
                    "end": dayToDate(indexToDay(l), j, "end"),
                    "type": indexToLocation(k)
                }
                events.append(node)
                workerStr = ""

print "Checking stuff out!"

jsonArray = (events)
jsonArray = json.dumps(jsonArray, indent=4, sort_keys=True)

orig_stdout = sys.stdout
f = file('events.js', 'w')
sys.stdout = f

print "var events = ", jsonArray, ";"
print "module.exports = events;"

sys.stdout = orig_stdout
f.close()



