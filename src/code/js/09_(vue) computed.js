/*
  ======================================== COMPUTED get / set ====================================================
*/


computed: {
    // default
   myComputedPropertyReadOnly () {
      return compute(somevalue)
   },

    // get - set
   myComputedPropertyReadWrite: {
      get () {
         return compute(somevalue)
      },

      set (newValue) {
         updateValues(newValue)
      }
   }
}



