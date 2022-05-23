<template>
  <div dir="rtl">
    <br />

    <div class="card text-center col-10 m-auto">
      <div class="card-header">شهادة السجل الصناعي</div>
      <div class="card-body">
        <form style="text-align: right">
          <div class="form-group">
            <label>اسم صاحب المصنع او الشركة :</label>
            <br /><br />
            <input type="text" class="form-control" required />
          </div>

          <br /><br />
          <div class="row">
            <div class="form-group col-4">
              <label>رأس المال المكتتب :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-4">
              <label>المدفوع نقدا :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-4">
              <label>المدفوع العيني :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
          </div>

          <br /><br />
          <div class="row">
            <div class="form-group col-4">
              <label>مدة الشركة :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-4">
              <label>تبداء بتاريخ :</label>
              <br /><br />
              <input type="date" class="form-control" required />
            </div>
            <div class="form-group col-4">
              <label>تنتهي بتاريخ :</label>
              <br /><br />
              <input type="date" class="form-control" required />
            </div>
          </div>
          <br /><br />

          <div class="row">
            <div class="form-group col-6">
              <label>الممثل القانوني :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-6">
              <label>أسس المصنع (الشركة ) بموجب :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
          </div>
          <br /><br />

          <div class="row">
            <div class="form-group col-6">
              <label>رقم الترخيص :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-6">
              <label>تاريخ الإصدار :</label>
              <br /><br />
              <input type="date" class="form-control" required />
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="form-group col-12">
              <label>رقم السجل التجاري :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="form-group col-12">
              <label>عنوان الشركة (المصنع) :</label>
              <br /><br />
              <input type="text" class="form-control" required />
            </div>
          </div>
          <br /><br />
          <div class="row">
            <div class="form-group col-12">
              <label>نوع النشاط:</label>
              <br /><br />
              <select class="form-control">
                <option selected>اختر النوع</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <br><br>
           <div  v-for= "key in count" :key="key" class="row" id="p">
            <div class="form-group col-4">
              <label>اسم المنتج :</label>
              <br /><br />
              <input  v-model="values['dynamic-field-'+key]" type="text" class="form-control" required :id="key" />
            </div>
            <div class="form-group col-4">
              <label>رقم الكود :</label>
              <br /><br />
              <input v-model="values['dynamic-field-2'+key]"  type="text" class="form-control" required :id="key"/>
            </div>
             <div class="form-group col-4">
             
              <br><br>
               <button @click="add"  id="add_more_fields" type="button" class="btn add_regist_code_prodect btn-success  col-4">+</button>
               <button @click="remove" id="remove_more_fields" type="button" class="btn add_regist_code_prodect btn-danger  col-4">-</button>
            </div>

          </div>
        </form>

           <br><br>
              <br><br>
                 <br><br>
           <button @click="submit" type="submit" class="btn col-4" style="background-color:#F26334;color:#ffff">تسجيل </button>
            
        <br><br>
    
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>

export default{
    name:"regist",
    data:function(){
            return{
               count : 1, //عدد الحقول المضافة
               values:{},//اسماء الحقول
            }
        },
        methods: {
    add: function(){
      this.count++;
    },
    remove: function () {
     this.count--;
     
    },
    submit: function(){
     for (var key of Object.keys(this.values)) {
          console.log(key + " -> " + this.values[key])
      }
    }

    
  }
  
}
</script>