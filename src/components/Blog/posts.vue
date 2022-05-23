<template>
    <div class="post-box">
        <div class="post-views">{{views}}</div>
         <h3 class="post-titel">{{titel}}</h3>
        <span class="post-date">{{date}}</span>
        <p class="post-content">{{content | shorten(10)}}</p>
        <div class="row">
            <div class="col-md-6">
                <span class="post-author">{{author}}</span>
            </div>
               <div class="col-md-6 category">
                <span class="post-category">{{category}}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default 
{
    name:"post",
    props:["id","titel","date","content","author","category","views"]
    
}
</script>

<style scoped>
.post-box{
    padding: 20px;
    background-color: #fff;
    box-shadow:0 0 10px #ddd;
    border-radius: 20px;
    text-align: left;
    position: relative;
    margin: 10px;
   
}
 .post-views{
     position:absolute;
     top:5px;
     right: 5px;
     background-color: rgb(62, 214, 176);   
     color: #fff;
     padding:1px 5px;
     border-radius: 4px;
     font-weight: bold;
     margin: 7px;
    }

    .post-titel{
        color: #777;
    }

    .post-date{
     
        color: rgb(146, 141, 141);
    }
    .post-content{
        display: block;
       padding: 10px 0px 5px ;
       line-height:1.5;

    }
    .post-author , .post-category{
        background-color: rgb(112, 120, 146);
        color: #fff;
        padding: 5px 5px;
        border-radius: 4px; 
    }
    .post-category{
          background-color: rgb(255, 145, 150);
    }
    .category{
       text-align: right;
    }
</style>
