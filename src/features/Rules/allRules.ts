import { Rule } from '../../models/Rules.types';

export const allRules: Rule[] = [
  {
    title: 'Travel deal!',
    description: 'All airports charge ⅓ of the rent',
    duration: 5,
    hasColor: false
  },
  {
    title: 'Crisis in {COLOR} properties',
    description: 'Properties stop charging rent',
    duration: 2,
    hasColor: true
  },
  {
    title: 'Olympics in {COLOR} properties',
    description: 'Properties charge double rent',
    duration: 3,
    hasColor: true
  },
  {
    title: '{COLOR} Friday Sale!',
    description: 'Properties can be bought for half a price',
    duration: 2,
    hasColor: true
  },
  {
    title: 'Pandemic in {COLOR} properties',
    description:
      'Properties close and stop participating in a game (cannot be bought, don’t charge rent, cannot build houses)',
    duration: 3,
    hasColor: true
  },
  {
    title: 'Volcano eruption in {COLOR} properties',
    description: 'All properties with all the buildings are destroyed. They go back to the bank.',
    duration: 1,
    hasColor: true
  },
  {
    title: 'Earthquake in {COLOR} properties',
    description: 'All buildings are destroyed. They go back to the bank.',
    duration: 1,
    hasColor: true
  },
  {
    title: 'Fire in {COLOR} properties',
    description: 'One building from each property is destroyed and goes back to the bank.',
    duration: 1,
    hasColor: true
  },
  {
    title: 'Houses occasion',
    description: 'You can buy 2 houses for any of your properties',
    duration: 1,
    hasColor: false
  },
  {
    title: 'Property opportunity',
    description: 'You can buy any available property',
    duration: 1,
    hasColor: false
  },
  {
    title: 'Property discount',
    description: 'You can buy your next property for half the price',
    duration: 2,
    hasColor: false
  },
  {
    title: 'Give a property back',
    description:
      'You must give back one of your properties to the bank. You are compensated with the property price.',
    duration: 1,
    hasColor: false
  },
  {
    title: 'High demand for budget vacation',
    description: 'Price paid for a property without houses is doubled',
    duration: 3,
    hasColor: false
  },
  {
    title: 'High demand season started',
    description:
      'Price paid for a property without houses is the same as for if there was one house',
    duration: 2,
    hasColor: false
  },
  {
    title: 'You’re on fire',
    description: 'Roll a dice one more time',
    duration: 1,
    hasColor: false
  },
  {
    title: 'You’ve inherited a small fortune',
    description: 'Your late great aunt left you $300',
    duration: 1,
    hasColor: false
  },
  {
    title: 'You’ve inherited a house',
    description: 'You’re late uncle left you a house. You can place it at any of your properties',
    duration: 3,
    hasColor: false
  },
  {
    title: 'You’re stuck in the traffic',
    description: 'You miss the next roll dice',
    duration: 1,
    hasColor: false
  },
  {
    title: 'Property market is high',
    description: 'You can sell one of your properties including houses for doubled price',
    duration: 1,
    hasColor: false
  },
  {
    title: 'Houses tax back',
    description: 'Government gives house taxes back. For every building you own get 20$',
    duration: 1,
    hasColor: false
  },
  {
    title: 'Higher standards in {COLOR} properties',
    description: 'Properties raised their standards and now charge 1 1/2 of the rent',
    duration: 3,
    hasColor: true
  }
];
