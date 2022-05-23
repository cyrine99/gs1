<template>
    <div class="blog">
        <div class="container">
            <h1>BLOG</h1> 
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <Post v-for="post in posts"  :key="post.id"  :views="post.views" :titel="post.titel" :date="post.date" :content="post.content"
                        :author="post.author" :category="post.category"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <SideBar/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Post from "@/components/Blog/posts.vue"
import SideBar from "@/components/global/SideBar.vue"

import posts_json from "../json/blog_posts.json";

export default{
    name:"blog",
    data:function(){
            return{
                posts:posts_json
            }
        }
    ,
    components:
    {
        Post,
        SideBar
    }
}
</script>
