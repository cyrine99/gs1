<template>
  <div dir="rtl">
    <br />
    <div class="card text-center col-10 m-auto">
      <div class="card-header text-muted">
        <h4>نظام التسجيل في السجل الصناعي للمواطن</h4>
      </div>
      <br />
      <div class="card-body">
        <form style="text-align: right">
          <div class="row">
            <div class="form-group col-md-6">
              <label>اسم صاحب المصنع او الشركة :</label>
              <br />
              <input type="text" class="form-control" required />
            </div>

            <div class="form-group col-md-3">
              <label>رقم الهاتف :</label>
              <br />
              <input
                style="text-align: left"
                v-model="valuephone"
                @input="acceptNumber"
                type="phone"
                class="form-control"
                required
              />
             <p v-show="phone_error==0" style="color:red">رقم الهاتف غير صحيح</p>
            </div>

            <div class="form-group col-md-3">
              <label>البلد ية :</label>

              <v-select
                class="style-chooser"
                :options="cities"
                label="name"
              ></v-select>
            
            </div>
          </div>

          <br /><br />

          <div class="row">
            <div class="form-group col-md-6">
              <label>الشكل القانوني :</label>
              <br />
              <select class="form-control">
                <option selected disabled>اختر الشكل القانوني</option>
                <option
                  v-for="legal in legals"
                  :key="legal.pk"
                  value="legal.pk"
                >
                  {{ legal.fields.name }}
                </option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label>نوع النشاط :</label>
              <br />
              <select v-model="action" class="form-control">
                <option selected disabled>اختر نوع النشاط</option>
                <option
                  v-for="action in actions"
                  :key="action.pk"
                  :value="action.pk"
                >
                  {{ action.active }}
                </option>
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

          <br /><br />

          <br /><br /><br />
          <h4>المصنع و الطاقة الإنتاجية</h4>
          <hr />
          <div class="row">
            <div class="row col-md-11" id="p">
              <div class="form-group col-md-2">
                <label>رقم الكود :</label>
                <input
                  v-model="search_code_factory_1"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="form-group col-md-4">
                <label>اسم المصنع :</label>
                <p
                  style="margin-top: 10px; font-size: 13px"
                  v-show="code_lenth"
                  v-for="factory in filtered_search_code_factory_1"
                  :key="factory.pk"
                  v-text="factory.BPName"
                ></p>
              </div>

              <div class="form-group col-md-2">
                <label>العدد :</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group col-md-2">
                <label>الكمية :</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group col-md-2">
                <label>القيمة :</label>
                <input type="text" class="form-control" required />
              </div>
            </div>

            <div class="form-group row col-md-1" style="display: inline">
              <br />
              <button
                @click="add"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-success"
              >
                +
              </button>
            </div>
          </div>

          <div v-if="count > 1" class="row">
            <div class="row col-md-11" id="p">
              <div class="form-group col-md-2">
                <label>رقم الكود :</label>
                <input
                  v-model="search_code_factory_2"
                  type="text"
                  class="form-control"
                  required
                />
              </div>

              <div class="form-group col-md-4">
                <label>اسم المصنع :</label>
                <p
                  style="margin-top: 10px; font-size: 13px"
                  v-show="code_lenth_2"
                  v-for="factory in filtered_search_code_factory_2"
                  :key="factory.pk"
                  v-text="factory.BPName"
                ></p>
              </div>

              <div class="form-group col-md-2">
                <label>العدد :</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group col-md-2">
                <label>الكمية :</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group col-md-2">
                <label>القيمة :</label>
                <input type="text" class="form-control" required />
              </div>
            </div>

            <div class="form-group row col-md-1" style="display: inline">
              <br />
              <button
                @click="add_factorr_2"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-success"
              >
                +
              </button>
              <button
                v-if="count > 1"
                @click="remove_factorr_2"
                id="remove_more_fields"
                type="button"
                class="btn add_regist_code_prodect btn-danger"
                style="background-color: #cd3c0d"
              >
                -
              </button>
            </div>
          </div>

          <br /><br /><br /><br />

          <h4>المنتجات</h4>
          <hr />
          <div v-if="action.length > 0" class="row">
            <div
              v-for="key in count_prodect"
              :key="key"
              class="row col-md-10"
              id="p"
            >
              <div class="form-group col-md-4">
                <label>رقم الكود:</label>
                <v-select
                  v-model="values_prodect[key]"
                  class="style-chooser"
                  :options="filtered_SegmentCode"
                  label="FamilyCode"
                ></v-select>
              </div>
              <div class="form-group col-md-8">
                <label  >اسم المنتج :</label>
                 <v-select
                  v-model="values_prodect[key]"
                  class="style-chooser"
                  :options="filtered_SegmentCode"
                  label="FamilyTitle"
                ></v-select>
              </div>
            </div>

            <div class="form-group col-md-2" style="display: inline">
              <br />
              <button
                @click="add_prod"
                id="add_more_fields"
                type="button"
                class="btn add_regist_code_prodect_tow btn-success"
              >
                +
              </button>
              <button
                v-if="count_prodect > 1"
                @click="remove_prod"
                id="remove_more_fields"
                type="button"
                class="btn add_regist_code_prodect_tow btn-danger"
                style="background-color: #cd3c0d">
                -
              </button>
            </div>
          </div>

          <br /><br /><br /><br />

          <h4>مستندات</h4>
          <hr />
          <div class="row">
            <div class="row col-md-8" id="p">
              <div class="form-group col-md-6">
                <label>رخصة النشاط التجاري :</label>
                <br />
                <div class="dropbox">
                  <input
                    type="file"
                    multiple
                    :name="uploadFieldName"
                    :disabled="isSaving"
                    @change="
                      filesChange($event.target.name, $event.target.files);
                      fileCount = $event.target.files.length;
                    "
                    accept="image/*"
                    class="input-file"
                  />
                  <p v-if="isInitial">
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                  <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
                </div>
              </div>
              <div class="form-group col-md-6">
                <label>السجل التجاري :</label>
                <br />
                <div class="dropbox">
                  <input
                    type="file"
                    multiple
                    :name="uploadFieldName"
                    :disabled="isSaving"
                    @change="
                      filesChange($event.target.name, $event.target.files);
                      fileCount = $event.target.files.length;
                    "
                    accept="image/*"
                    class="input-file"
                  />
                  <p v-if="isInitial">
                    Drag your file(s) here to begin<br />
                    or click to browse
                  </p>
                  <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <h4>الوقائع و التعديلات</h4>
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
          </div> -->
        </form>

        <br /><br />
        <br /><br />
        <br /><br />
        <button
          @click="submit"
          type="submit"
          class="btn my-btn bg-orange col-md-4"
          style="background-color: #f26334; color: #ffff"
        >
          إرسال
        </button>


        <br /><br />
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>
import legal_status from "../json/legal_status.json";
import cities from "../json/cities.json";
import factory_code_name from "../json/factory_code_name.json";
import actions from "../json/actions.json";
import segment_family from "../json/segment-family.json";

export default {
  name: "regist",
  data: function () {
    return {
      
      count: 1, //عدد الحقول المضافة
      values: {}, //اسماء الحقول
      valuephone: "",
      count_prodect: 1,
      values_prodect: {},
      values_prodect_name: {},

      count_facts_browsers: 1,
      values_facts_browsers: {},

      legals: legal_status,

      cities: cities,

      search_code_factory_1: "",
      search_code_factory_2: "",
      factory_code_name: factory_code_name,

      index_code_fectory: 1,

      actions: actions,
      action: "",

      segment_family: segment_family,

      phone_error:-1
    };
  },
  methods: {
    add: function () {
      this.count++;
    },
    remove: function () {
      this.count--;
    },
    add_factorr_2: function () {
      this.count++;
    },
    remove_factorr_2: function () {
      this.count--;
      this.search_code_factory_2 = "";
    },
    add_prod: function () {
      this.count_prodect++;
    },
    remove_prod: function () {
      this.count_prodect--;
    },

    submit: function () {
      for (var key of Object.keys(this.values_prodect)) {
        console.log(key + " -> " + this.values_prodect[key].prodect);
      }
    },
    acceptNumber() {
    const regexPhoneNumber = /^\+?(00|218|0)9(1|2|4)\d{7}$/; 

	if (this.valuephone.match(regexPhoneNumber)) 
    {
		 this.phone_error=1 ;
	}
     else {
	this.phone_error= 0 ;
	}

    },
    code_fectory_click_enter: function (key) {
      this.index_code_fectory = key;
    },
  },
  computed: {
    filtered_search_code_factory_1() {
      return this.factory_code_name.filter((factory) =>
        factory.GlobalLocationNumber.toString().includes(
          this.search_code_factory_1
        )
      );
    },
    filtered_search_code_factory_2() {
      return this.factory_code_name.filter((factory) =>
        factory.GlobalLocationNumber.toString().includes(
          this.search_code_factory_2
        )
      );
    },
    code_lenth() {
      return this.search_code_factory_1.length == 13;
    },

    code_lenth_2() {
      return this.search_code_factory_2.length == 13;
    },
    
     filtered_SegmentCode() {
      return this.segment_family.filter((SegmentCode) =>
        SegmentCode.SegmentCode.toString().includes(
          this.action
        )
      );
    },

  },
};
</script>
