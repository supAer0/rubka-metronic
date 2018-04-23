<template>
  <div id="app">
    <!-- begin:: Page -->
    <div class="m-grid m-grid--hor m-grid--root m-page">
      <router-view/>
      <footer class="m-grid__item m-footer ">
        <div class="m-container m-container--fluid m-container--full-height m-page__container">
          <div class="m-stack m-stack--flex-tablet-and-mobile m-stack--ver m-stack--desktop">
            <div class="m-stack__item m-stack__item--left m-stack__item--middle m-stack__item--last">
              <span class="m-footer__copyright">
                2018 &copy; КЛЕВЕРtech
              </span>
            </div>
          </div>
        </div>
      </footer>
      <!-- end::Footer -->
    </div>
    <!-- end:: Page -->
    <!-- begin::Scroll Top -->
    <div id="m_scroll_top" class="m-scroll-top">
      <i class="la la-arrow-up"></i>
    </div>
    <!-- end::Scroll Top -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height:100%;
}
</style>
