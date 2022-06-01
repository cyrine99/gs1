<template>
    <div dir="rtl" >
    <br /><br /><br /><br /><br />
    <div class="card text-center col-7 m-auto header"  >
      <div class="card-body" style="padding:0px">
        <form >
        <div class="row">
          
          <div class="col-md-4" style="background-color: #211c44;text-align: center">
            <br>
            <br>
            <img  src="../../assets/logo.jpg" />
            <br><br>
          </div>
         <div class="col-md-2" ></div>
            <div class="col-md-6 m-10" >
                <br>
               
               <div class="form-group col-md-8"> <h4  style="text-align: center">تسجيل الدخول</h4></div>
                 <br>   
                 <div class="form-group col-md-8"  style="text-align: right;">
              <label>اسم المستخدم :</label>
              <br />
              <input type="text" class="form-control" required />
            </div>

            <div class="form-group col-md-8" style="text-align: right;">
              <label>كلمة المرور :</label>
              <br />
              <input
                style="text-align: left"
                type="phone"
                class="form-control"
                required
              />
            </div>
            <br>
            
               <div class="form-group col-md-8">
                      <button
          @click="submit"
          type="submit"
          class="btn my-btn bg-orange col-md-6 "
          style="background-color: #f26334; color: #ffff; "
        >
          دخول
        </button></div>
           
            </div>
        </div>
        


        </form>

        </div>
        </div>
        </div>

</template>



