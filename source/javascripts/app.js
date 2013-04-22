
$(function () {

  $('body').delegate('.links li', 'click', changeTab)

  function changeTab (e) {
    var el, id, container, now, old
    e.preventDefault()

    // Get reference to content to show
    el = $(e.currentTarget)
    id = el.find('a').attr('href')

    // Update link state
    el.siblings('.active').removeClass('active').end().addClass('active').trigger('activated')

    // Update Content visibility
    container = el.closest('section')
    now = container.find(id)
    old = now.siblings(':visible')

    old.fadeOut(function () {
      now.fadeIn()
    })

    // Fire tracking - See who is most popular :)
    if (window._gaq) {
      var type, who
      type = el.closest('section').attr('class')
      who = el.find('a').attr('href').slice(1)
      // console.log('track', type, who)
      _gaq.push(['_trackEvent', type, who])
    }
  }

})
