Contacts = new Mongo.Collection('Contacts');

Schemas.Contact = new SimpleSchema({
  inquiry: {
    type: Object,
    label: "Your information"
  },
  'inquiry.name': {
    type: String,
    label: "Name"
  },
  'inquiry.email': {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email
  },
  'inquiry.text': {
    type: String,
    label: 'About your company and project'
  },
  services: {
    type: Object
  },
  'services.strategy': {
    type: Boolean,
    label: 'Strategy'
  },
  'services.design': {
    type: Boolean,
    label: 'Design'
  },
  'services.engineering': {
    type: Boolean,
    label: 'Engineering'
  },
  'services.consulting': {
    type: Boolean,
    label: 'Consulting'
  },
  timing: {
    type: Object
  },
  'timing.today': {
    type: Boolean,
    label: 'Today'
  },
  'timing.quarter': {
    type: Boolean,
    label: 'This quarter'
  },
  'timing.year': {
    type: Boolean,
    label: 'This year'
  },
  budget: {
    type: String,
    allowedValues: ['25-50', '50-100', '100+', 'Not sure']
  }
});

Contacts.attachSchema(Schemas.Contact);