export default function platformStyles(appStyle) {
  return {
    knob: {
      width: 38,
      height: 7,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: appStyle.agendaKnobColor
    },
    weekdaysWrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: -20,
      justifyContent: 'space-around',
      marginLeft: 15,
      marginRight: 15,
      paddingTop: 15,
      paddingBottom: 7,
      backgroundColor: appStyle.calendarBackground
    },
    weekdays: {
      flex: 1,
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
    },
  };
}
