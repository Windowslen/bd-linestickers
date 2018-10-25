const about = require('#/package.json')
const l10n = require('#/js/l10n')
const template = require('#/templates/confirm')

class Confirm {
  buildContainer () {
    return template({
      title: l10n.getToken('delete-confirm'),
      yes: l10n.getToken('yes'),
      no: l10n.getToken('no')
    })
  }
  fire (event) {
    let id = $(event.currentTarget.parentNode.parentNode.parentNode).attr('data-id')
    $('#bda-qem-line-container .confirm .no').attr('onclick', `window['${about.id}'].confirm.hide()`)
    $('#bda-qem-line-container .confirm .yes').attr('onclick',
      `window['${about.id}'].storage.deletePack(${id}); window['${about.id}'].menu.removePack(${id}); window['${about.id}'].confirm.hide()`)
    this.show()
  }
  initializeAll () {
    $('#bda-qem-line-container .line-editbar .icon-plus-cross').on('click', (event) => this.fire(event))
  }
  initializeOne (id) {
    $(`#bda-qem-line-container .line-pack[data-id="${id}"] .icon-plus-cross`).on('click', (event) => this.fire(event))
  }
  show () {
    // $('#bda-qem-line-container .confirm').show()
    $('#bda-qem-line-container .confirm').css('opacity', '1')
    $('#bda-qem-line-container .confirm').css('pointer-events', 'unset')
  }
  hide () {
    // $('#bda-qem-line-container .confirm').hide()
    $('#bda-qem-line-container .confirm').css('opacity', '0')
    $('#bda-qem-line-container .confirm').css('pointer-events', 'none')
    $('#bda-qem-line-container .confirm .yes').attr('onclick', '')
  }
}
module.exports = Confirm
