new Vue({
  el:'#mainContainer',
  data:{
    item:'',
    price:'',
    dop:'',
    tableItem :[],
    tableList: []
  },
  methods:{
   addItem(e){
     e.preventDefault();
      itm = this.item;
      amt = this.price;
      dp = this.dop;
      this.tableItem.push(this.item);
      nm = this.tableItem.length;
      
      this.tableList.push(`
      <tr>
      <th scope="row">${nm}</th>
      <td>${dp}</td>
      <td>${itm}</td>
      <td>${amt}</td>
      </tr>
    `);
    return
      console.log(this.tableItem);
   
      
    }
  },
  
})