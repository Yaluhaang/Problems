const Storage_Key = 'items-stored';
new Vue({
  el:'#mainContainer',
  data:{
    item:'',
    price:'',
    dop:'',
    tableItem :[],
    tableLists: [],
    totalExpense: ''
  },
  mounted: function(){
    items = JSON.parse(localStorage.getItem(Storage_Key) ||'[]');
    items.forEach(element => {
      var obj = {
          itm: element.itm,
          amt: element.amt,
          dp: element.dp,
          nm: element.nm,
      }
      this.tableLists.push(obj);
    })
// Problem Here
    this.tableLists.forEach(price=>{
      let getPrice = price.amt ;
      let priceArray = [];
      priceArray.push(getPrice);
      let calculated = priceArray.reduce(((acc,value)=> Number(acc + value)),0);
      console.log(calculated);
      
    })
    
  },
  
  methods:{
    deleteItem(item){
      this.tableLists.splice(this.item.indexOf(item) ,1);
      localStorage.setItem(Storage_Key,JSON.stringify(this.tableLists));
    },
   addItem(e){
    e.preventDefault();
     if(this.item.length > 0){
          this.tableItem.push(this.item);
          var obj ={
          itm: this.item,
          amt:this.price,
          dp: this.dop,
          nm: this.tableLists.length,
          }
          this.tableLists.push(obj);
          // reset input field 
            this.item='';
            this.price='';
            this.dop='';
            // add to local storage
            value = JSON.stringify(this.tableLists);
            localStorage.setItem(Storage_Key,value);
            
     }
    }
  }
  
  // mounted:function(){
  //     console.log("testing");
  //     if(localStorage.getItem('itm')===null){
  //       list=[];
  //     }else{
  //       list = JSON.parse(localStorage.getItem('itm')) ;
  //     }
  //     return list
  //     this.tableLists.push(list);
  //   }
  
  
})