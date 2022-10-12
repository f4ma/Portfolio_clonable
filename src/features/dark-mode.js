/* eslint-disable no-undef */
import Cookies from 'js-cookie'

function DarkMode() {
  $(document).ready(function () {
    if (Cookies.get('darkTheme') == 'enabled') {
      $('.page-wrapper').addClass('dark-theme')
      $('body').css('background-color', '#191919')
    }
  })

  $('.dark-mode-switch_wrapper').on('click', function () {
    $('.page-wrapper').toggleClass('dark-theme')
    let pageWrapper = $('.page-wrapper')
    if (pageWrapper.hasClass('dark-theme')) {
      Cookies.set('darkTheme', 'enabled', { expires: 365 })
    } else {
      Cookies.remove('darkTheme')
    }
  })
}

export default DarkMode
