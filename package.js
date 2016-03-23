Package.describe({
  name: 'rgnevashev:autoform-bs-datetimepicker',
  summary: 'Custom bootstrap-datetimepicker input type with timezone support for AutoForm',
  version: '4.17.37',
  git: 'https://github.com/aldeed/meteor-autoform-bs-datetimepicker.git'
});

Package.onUse(function(api) {
  api.use([
    'templating@1.1.5',
    'aldeed:autoform@4.0.0 || 5.0.0',
    'eonasdan:bootstrap-datetimepicker@4.17.37'
  ]);
  api.addFiles([
    'autoform-bs-datetimepicker.html',
    'autoform-bs-datetimepicker.js'
  ], 'client');
});
