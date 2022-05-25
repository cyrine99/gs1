<template>
  <div dir="rtl">
    <br />
    <div class="card text-center col-10 m-auto">
      <div class="card-header text-muted"><h4>نظام السجل الصناعي</h4></div>
      <br />
      <div class="card-body">
        <form style="text-align: right">
          <div class="row">
            <div class="form-group col-md-4">
              <label>اسم صاحب المصنع او الشركة :</label>
              <br />
              <input type="text" class="form-control" required />
            </div>

            <div class="form-group col-md-4">
              <label>رقم الهاتف :</label>
              <br />
              <input type="phone" class="form-control" required />
            </div>

            <div class="form-group col-md-4">
              <label>البلد ية :</label>
              <br />
              <select class="form-control">
                <option selected disabled>اختر البلدية</option>
                <option value="1">طرابلس</option>
                <option value="2">بن وليد</option>
                <option value="3">بنغازي</option>
                <option value="1">المرج</option>
                <option value="2">غات</option>
                <option value="3">درنة</option>
              </select>
            </div>
          </div>

          <br /><br />

          <div class="row">
            <div class="form-group col-md-6">
              <label>الشكل القانوني :</label>
              <br />
              <select class="form-control">
                <option selected disabled>اختر الشكل القانوني</option>
                <option value="1">فردي</option>
                <option value="2">مساهمة</option>
                <option value="3">ذات المسئولية المحدودة</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>نوع النشاط :</label>
              <br />
              <select class="form-control">
                <option selected disabled>اختر نوع النشاط</option>
                <option value="1">صناعات غذائية</option>
                <option value="2">صناعات غذائية</option>
              </select>
            </div>
          </div>

          <br />
          <br />

          <div class="row">
            <div class="form-group col-md-4">
              <label>رقم السجل التجاري :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>رقم الترخيص :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>تاريخ الإصدار :</label>
              <input type="date" class="form-control" required />
            </div>
          </div>

          <br />
          <br />
          <div class="row">
            <div class="form-group col-md-4">
              <label>رأس المال المكتتب :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>المدفوع نقدا :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>المدفوع العيني :</label>
              <input type="text" class="form-control" required />
            </div>
          </div>

          <br /><br />
          <div class="row">
            <div class="form-group col-md-4">
              <label>مدة الشركة :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>تبداء بتاريخ :</label>
              <input type="date" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>تنتهي بتاريخ :</label>
              <input type="date" class="form-control" required />
            </div>
          </div>
          <br /><br />

          <div class="row">
            <div class="form-group col-md-4">
              <label>الممثل القانوني :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>أسس المصنع (الشركة ) بموجب :</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group col-md-4">
              <label>عنوان المصنع (الشركة) :</label>
              <input type="text" class="form-control" required />
            </div>
          </div>

          <br><br>
    

        
          <br><br><br>
          <h4>المصنع و الطاقة الإنتاجية</h4>
          <hr>
          <div class="row">
            <div v-for="key in count" :key="key" class="row col-md-10" id="p">
              <div class="form-group col-md-3">
                <label>اسم المصنع :</label>
                <input
                  v-model="values['dynamic-field-' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>
              <div class="form-group col-md-3">
                <label>رقم الكود :</label>
                <input
                  v-model="values['dynamic-field-2' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>

               <div class="form-group col-md-2">
                    <label>العدد :</label>
                    <input
                      v-model="values['dynamic-field-3' + key]"
                      type="text"
                      class="form-control"
                      required
                      :id="key"
                    />
                  </div>
                  <div class="form-group col-md-2">
                    <label>الكمية :</label>
                    <input
                      v-model="values['dynamic-field-4' + key]"
                      type="text"
                      class="form-control"
                      required
                      :id="key"
                    />
                  </div>
                  <div class="form-group col-md-2">
                    <label>القيمة :</label>
                    <input
                      v-model="values['dynamic-field-5' + key]"
                      type="text"
                      class="form-control"
                      required
                      :id="key"
                    />
                  </div>
            
            </div>

              <div class="form-group row col-md-2" style="display: inline">
              <br />
              <button
                @click="add"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-success"
              >
                +
              </button>
              <button
                v-if="count > 1"
                @click="remove"
                id="remove_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-danger"
                style="background-color: #cd3c0d"
              >
                -
              </button>
            </div>

          </div>
          

            <br><br><br><br>
          <h4>المنتجات</h4>
          <hr>
          <div class="row">
            <div v-for="key in count_prodect" :key="key" class="row col-md-8" id="p">
              <div class="form-group col-md-6">
                <label>اسم المنتج :</label>
                <input
                  v-model="values_prodect['dynamic-field-' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>
              <div class="form-group col-md-6">
                <label>رقم الكود :</label>
                <input
                  v-model="values_prodect['dynamic-field-2' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>
            </div>

            <div class="form-group col-md-4" style="display: inline">
              <br />
              <button
                @click="add_prod"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-success"
              >
                +
              </button>
              <button
                v-if="count_prodect > 1"
                @click="remove_prod"
                id="remove_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-danger"
                style="background-color: #cd3c0d"
              >
                -
              </button>
            </div>
          </div>



  <br><br><br><br>
          <h4>الوقائع و التعديلات</h4>
          <hr>
          <div class="row">
            <div v-for="key in count_facts_browsers" :key="key" class="row col-md-8" id="p">
              <div class="form-group col-md-6">
                <label>الوقائع :</label>
                <input
                  v-model="values_facts_browsers['dynamic-field-' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>
              <div class="form-group col-md-6">
                <label>التعد يلات  :</label>
                <input
                  v-model="values_facts_browsers['dynamic-field-2' + key]"
                  type="text"
                  class="form-control"
                  required
                  :id="key"
                />
              </div>
            </div>

            <div class="form-group col-md-4" style="display: inline">
              <br />
              <button
                @click="add_facts_browsers"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-success"
              >
                +
              </button>
              <button
                v-if="count_facts_browsers > 1"
                @click="remove_facts_browsers"
                id="remove_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-danger"
                style="background-color: #cd3c0d"
              >
                -
              </button>
            </div>
          </div>

          
        </form>

        <br><br>
        <br><br>
        <br><br>
        <button
          @click="submit"
          type="submit"
          class="btn my-btn bg-orange col-md-4"
          style="background-color: #f26334; color: #ffff"
        >
          تسجيل
        </button>

        <br /><br />
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "regist",
  data: function () {
    return {
       count: 1, //عدد الحقول المضافة
      values: {}, //اسماء الحقول

      count_prodect:1,
      values_prodect:{},

      count_facts_browsers:1,
      values_facts_browsers:{}
      
    
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    remove: function () {
      this.count--;
    },
     add_prod: function () {
      this.count_prodect++;
    },
    remove_prod: function () {
      this.count_prodect--;
    },
     add_facts_browsers: function () {
      this.count_facts_browsers++;
    },
    remove_facts_browsers: function () {
      this.count_facts_browsers--;
    },
    submit: function () {
      for (var key of Object.keys(this.values)) {
        console.log(key + " -> " + this.values[key]);
      }
    },
  },
};
</script>