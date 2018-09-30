var moment = require("moment");

module.exports = {

  /**
	 * Validate input
	 * Validation with respect to date, month and year
	 * Validation for valid month
	 * Validation for valid day
   * @param date
   * @param dateFormat
   * @returns {*}
   */
   isValidDate: function ( date, dateFormat ) {
    var formattedDate = this.dateFormatting( date, dateFormat );
    date = formattedDate.split( "/" );

    if ( date.length !== 3 ) {

      return false;
    }

    if ( isNaN( date[0] ) || isNaN( date[1] || isNaN( date[2] ) ) ) {

      return false;
    }

    if ( !this.isValidDD ( date[0] ) ) {

      return false;
    }

    if ( !this.isValidMM ( date[1] ) ) {

      return false;
    }

    if ( !this.isValidYYYY ( date[2] ) ) {

      return false;
    }

    return this.isValidDDMMYYYY( date[0], date[1], date[3] );
  },

  /**
	 * Formatting date to custom format (DD/MM/YYYY)
   * @param date
   * @param currentFormat
   * @returns {string}
   */
  dateFormatting: function ( date, currentFormat ) {

    return moment( date, currentFormat ).format( "DD/MM/YYYY" );
  },

  isValidDD: function ( dd ) {

    return !( dd.length > 2 || Number( dd ) > 31 );
  },

  isValidMM: function ( mm ) {

    return !( mm.length > 2 || Number( mm ) > 12 );
  },

  isValidYYYY: function ( yyyy ) {

    return yyyy.length === 4;
  },

  isValidDDMMYYYY: function ( dd, mm, yyyy ) {
    dd = Number( dd );
    mm = Number( mm );
    yyyy = Number( yyyy );
    var isLeapYear = ( yyyy % 4 === 0 );

    switch ( mm ) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        if ( dd > 31 ) {

          return false;
        }
        break;

        case 2:
          if ( isLeapYear && dd > 29 ) {

            return false;
          }

          if ( !isLeapYear && dd > 28 ) {

            return false;
          }
          break;

      case 4:
      case 6:
      case 9:
      case 11:
        if ( dd > 30 ) {

          return false;
        }
        break;

        default:
          return false;
          break;
    }
    return true;
  },

  /**
   * Check if given date is past the current date
   * @param date
   * @param currentFormat
   * @returns {boolean}
   */
   isDatePast: function ( date, currentFormat ) {
     const currentDate = moment().format(currentFormat);

     return moment(date).isBefore(currentDate);
  }
};
