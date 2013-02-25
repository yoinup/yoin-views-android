
Yva.FooterOptionView = Em.View.extend( Yn.Icon, Yn.Btap, {

  classNames: ['footer-option', 'is-icon-big'],
  classNameBindings: ['isSelected'],

	currentTabView: null,

  isSelected: Em.computed(function(){

		return this.get('currentTabView') === this.get('tab');

  }).property('currentTabView', 'tab'),

  action: Em.computed(function() {

    var tab = this.get('tab');
    var value = tab.charAt(0).toUpperCase() + tab.slice(1);
    return 'goTo'+value;

  }).property()

});

Yva.FooterView = Em.View.extend(Yn.Context, {
	
  elementId: 'footer',
	classNames: ['footer', 'android', 'l-footer'],
	
  manager: null,
	currentTabView: null,
	
	templateName: 'footer'

});
