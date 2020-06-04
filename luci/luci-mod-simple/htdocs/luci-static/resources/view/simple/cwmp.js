'use strict';
'require view';
'require form';
'require tools.widgets as widgets';

return view.extend({
	render: function() {
		var m, s, o;

		m = new form.Map('cwmp');

		s = m.section(form.NamedSection, 'acs', _('ACS'));
		s.anonymous   = false;
		s.addremove   = false;
		s.addbtntitle = _('ACS settings');

		o = s.option(form.Flag, 'enable', _('Enable'));
		o.enabled = 'true';
		o.disabled = 'false'

		o = s.option(form.Value, 'url', _('URL'));
		o.depends('enable', 'true');

		o = s.option(form.Value, 'username', _('Username'));
		o.depends('enable', 'true');

		o = s.option(form.Value, 'password', _('Password'));
		o.depends('enable', 'true');

		return m.render();
	}
});

