<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg">
      <div class="container" dir="rtl">
        <a class="navbar-brand" href="#">
          <img alt="Vue logo" src="../../assets/gs1libya_logo.png" />
           السجل الصناعي الإلكتروني
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active home_link" aria-current="page" href="/">
                الرئيسية
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- <div class="container">

            <div class="logo">
                <img alt="Vue logo" src="../../assets/gs1libya_logo.png" />
               
            </div>
            <ul>
                <router-link to="/" tag="li">
                    <a>الرئيسية</a>
                </router-link>

                 <router-link to="/blog" tag="li">
                    <a>Blog</a>
                </router-link>

                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>

                <router-link to="/help" tag="li">
                    <a>Help</a>
                </router-link> 
            </ul>
        </div> -->
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 0px 8px rgb(0 0 0 / 22%);
}
.header a {
  text-decoration: none;
  color: #002c6c;
}
.header ul li {
  display: inline;
  padding: 10px;
  text-align: right;
}
nav ul {
  text-align: left;
}
.logo {
  float: right;
}
.navbar .nav-item .nav-link {
  font-size: 16px;
  color: #002c6c;
  font-weight: 600;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.5s ease;
}
.navbar .navbar-brand {
  font-size: 1.3rem;
  font-weight: 500;
  color: #f26334;
}

.home_link:hover
{
    background-color: #cde9f5;
}
</style>
