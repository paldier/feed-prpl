'use strict';
'require view';
'require form';
'require tools.widgets as widgets';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('obuspa');

		s = m.section(form.TypedSection, 'controller', _('USP'));
		s.anonymous   = true;
		s.addremove   = false;
		s.addbtntitle = _('USP settings');

		o = s.option(form.Flag, 'enable', _('Enable'));
		o.enabled = 'true';
		o.disabled = 'false'

		o = s.option(form.Value, 'endpoint', _('Endpoint'));
		o.depends('enable', 'true');
		o.default = 'self::example.controller.com';

		o = s.option(form.Value, 'host', _('Host'));
		o.depends('enable', 'true');
		o.default = 'example.controller.com';

		o = s.option(form.Value, 'username', _('Username'));
		o.depends('enable', 'true');

		o = s.option(form.Value, 'password', _('Password'));
		o.depends('enable', 'true');

		return m.render();
	}
});

