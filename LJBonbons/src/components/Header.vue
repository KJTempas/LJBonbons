<template>
    <div class="header">

        <div class="jumbotron">
            <!--<h1 class="display-4" id="title">Long John's Caribbean Bonbons</h1>-->
            <h1 class="display-4" id="title"<span id="long">Long</span><span id="johns">John's</span><span id="caribbean">Caribbean</span><span id="bonbons">Bonbons</span></h1>
        </div>

        </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    .jumbotron {
        background-image: url('../assets/bonbonpic.jpg');
        /* Photo by Merve Aydın on Unsplash*/
        background-position: center;
        background-size: cover;
    }
    #title {
        font-weight: 500;
        
    }
    #long {
        color: yellow;
        font-size: 400%

    }
    #johns {
        color: #66e440 ;
        font-size: 400%
    }
    #caribbean {
        color: lightblue;
        font-size: 400%
    }
    #bonbons {
        color:#66e440;
        font-size: 400%
    }

</style>