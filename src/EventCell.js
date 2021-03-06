import React from 'react';
import cn from 'classnames';
import dates from './utils/dates';
import { accessor, elementType } from './utils/propTypes';
import { accessor as get } from './utils/accessors';

// style={{'background': taskDict[event.type] }}
const taskDict = {
  'Cooking': '#c4146c',
  'Botanical': '#ffc3a0',
  'Engineering': '#e4c3cb',
  'Security': '#44aa77'
}

let propTypes = {
  event: React.PropTypes.object.isRequired,
  slotStart: React.PropTypes.instanceOf(Date),
  slotEnd: React.PropTypes.instanceOf(Date),

  selected: React.PropTypes.bool,
  eventPropGetter: React.PropTypes.func,
  titleAccessor: accessor,
  allDayAccessor: accessor,
  startAccessor: accessor,
  endAccessor: accessor,

  eventComponent: elementType,
  eventWrapperComponent: elementType.isRequired,
  onSelect: React.PropTypes.func
}

class EventCell extends React.Component {
  render() {
    let {
        className
      , event
      , selected
      , eventPropGetter
      , startAccessor, endAccessor, titleAccessor
      , slotStart
      , slotEnd
      , onSelect
      , eventComponent: Event
      , eventWrapperComponent: EventWrapper
      , ...props } = this.props;

    let title = get(event, titleAccessor)
      , end = get(event, endAccessor)
      , start = get(event, startAccessor)
      , isAllDay = get(event, props.allDayAccessor)
      , continuesPrior = dates.lt(start, slotStart, 'day')
      , continuesAfter = dates.gt(end, slotEnd, 'day')

    if (eventPropGetter)
      var { style, className: xClassName } = eventPropGetter(event, start, end, selected);

    return (
      <EventWrapper style={{'background': taskDict[event.type] }} event={event} >
        <div
          className={cn('rbc-event', className, xClassName, {
            'rbc-selected': selected,
            'rbc-event-allday': isAllDay || dates.diff(start, dates.ceil(end, 'day'), 'day') > 1,
            'rbc-event-continues-prior': continuesPrior,
            'rbc-event-continues-after': continuesAfter
          })}
          onClick={(e) => onSelect(event, e)}
          style={{...props.style, ...style, 'background': taskDict[event.type]}}
        >
          <div className='rbc-event-content' title={title} style={{'background': taskDict[event.type] }}>
            { Event
              ? <Event event={event} title={title}/>
              : title
            }
          </div>
        </div>
      </EventWrapper>
    );
  }
}

EventCell.propTypes = propTypes;

export default EventCell
