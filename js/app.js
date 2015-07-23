var ViewModel = function() {
   this.clickCount = ko.observable(0);
   this.name = ko.observable('Tabby');
   this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
   this.imgAttribution = ko.observable('acknowledgement');

   this.incrementCounter = function() {
      this.clickCount(this.clickCount() +1);


   };
   this.level = ko.computed(function() {
      var retval = "newborn";
      if (this.clickCount>9) {
          retval="infant";
      }
      return retval;

   },this);
};

ko.applyBindings(new ViewModel());
