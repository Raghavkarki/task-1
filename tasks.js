const {getField } = require('./nools-extras');




module.exports = [
  {
    name: 'follow_up.anc_follow_up.pregnancy',
    title: 'followup.pnc_form.pregnancy',
    icon: 'pregnancy',
    appliesTo: 'reports',
    appliesToType: ['anc_form'],
    appliesIf: (contact, report) => {

      return report && getField(report, 'pregnant') === 'yes';
    },
    actions: [
      {
        type: 'report',
        form: 'followup'
      }
    ],
  
//       events: [...Array(10)].map((_, index) =>{
//         const months = index + 1;
      

//         return {
//          id:"follow_up",
//           start: 3,
//           end: 3,
//           days: 30,
//           duedate: (event, contact, report) => {
//             const dueDate = noolsExtras.calculateDueDate(report.reported_date, months);
//             return dueDate;
//           }
//         };
//         })
//       }
//     ];



// module.exports = [
//   {
//     icon: 'mother-child',
//     title: 'task.postnatal_followup',
//     appliesTo: 'reports',
//     appliesToType: [ 'delivery' ],
//     actions: [ { form: 'postnatal_visit' } ],
events: [
{

  days: 0,
  start: 0,
  end: 0
}
  ],
  
  
}
];