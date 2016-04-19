/**
 * Calendar Picker Component
 * By Stephani Alves - April 11, 2015
 */
'use strict';

var StyleSheet = require('react-native').StyleSheet;

var styles = StyleSheet.create({
  calendar: {
    marginTop: 10
  },
  dayWrapper: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  dayButton: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  dayLabel: {
    fontSize: 14,
    color: '#000',
    alignSelf: 'center'
  },

  dayLabelsWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.0)',
    borderColor: '#ddd'
  },

  daysWrapper: {
    alignSelf: 'center',
  },

  dayLabels: {
    textAlign: 'center',
  },

  monthLabel: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center'
  },

  headerWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 3,
    backgroundColor: 'rgba(0,0,0,0.0)'
  },

  prevMonthSelector: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  nextMonthSelector: {
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  prev: {
    textAlign: 'left'
  },

  next: {
    textAlign: 'right'
  },

  weeks: {
    flexDirection: 'column'
  },

  weekRow: {
    flexDirection: 'row'
  }
});

module.exports = styles;