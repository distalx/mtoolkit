module.exports = {
  html: (t_name) => {
    return `<template='${t_name}'>
    <p> ${t_name} works! </p>
</template>
        `;
  },
  js: (t_name) => {
    return `import { Template } from 'meteor/templating';
import './${t_name}.html';

Template.${t_name}.onRendered(function () {
    const instane = this;
})

Template.${t_name}.onCreated(function () {
    const instane = this;
})

Template.${t_name}.helpers({
    item(){

    },
});

Template.${t_name}.events({
    
});


Template.${t_name}.onDestroyed(function () {

});

`;
  },
};
