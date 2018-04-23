<template>
  <div>
    <!-- BEGIN: Header -->
    <header id="m_header" class="m-grid__item    m-header " m-minimize-offset="200" m-minimize-mobile-offset="200">
      <div class="m-container m-container--fluid m-container--full-height">
        <div class="m-stack m-stack--ver m-stack--desktop">
          <!-- BEGIN: Brand -->
          <div class="m-stack__item m-brand  m-brand--skin-light ">
            <div class="m-stack m-stack--ver m-stack--general">
              <div class="m-stack__item m-stack__item--middle m-brand__logo">
                <a href="index.html" class="m-brand__logo-wrapper">
                  <img alt="" src="assets/demo/demo6/media/img/logo/logo.png" />
                </a>
                <h3 class="m-header__title">
                  Rubka
                </h3>
              </div>
              <div class="m-stack__item m-stack__item--middle m-brand__tools">
                <!-- BEGIN: Responsive Aside Left Menu Toggler -->
                <a href="javascript:;" id="m_aside_left_offcanvas_toggle" class="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                  <span></span>
                </a>
                <!-- END -->
                <!-- BEGIN: Topbar Toggler -->
                <a id="m_aside_header_topbar_mobile_toggle" href="javascript:;" class="m-brand__icon m--visible-tablet-and-mobile-inline-block">
                  <i class="flaticon-more"></i>
                </a>
                <!-- BEGIN: Topbar Toggler -->
              </div>
            </div>
          </div>
          <!-- END: Brand -->
          <div class="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
            <div class="m-header__title">
              <h3 class="m-header__title-text">
                Rubka
              </h3>
            </div>
            <!-- BEGIN: Topbar -->
            <div id="m_header_topbar" class="m-topbar  m-stack m-stack--ver m-stack--general">
              <div class="m-stack__item m-topbar__nav-wrapper">
                <ul class="m-topbar__nav m-nav m-nav--inline">
                  <li class="m-nav__item m-topbar__quick-actions m-dropdown m-dropdown--skin-light m-dropdown--large m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                    <a href="#" class="m-nav__link m-dropdown__toggle">
                      <span class="m-nav__link-badge m-badge m-badge--dot m-badge--info m--hide"></span>
                      <span class="m-nav__link-icon">
                            <span class="m-nav__link-icon-wrapper">
                              <i class="flaticon-share"></i>
                            </span>
                      </span>
                    </a>
                    <div class="m-dropdown__wrapper">
                      <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                      <div class="m-dropdown__inner">
                        <div class="m-dropdown__header m--align-center">
                          <span class="m-dropdown__header-title">
                                Quick Actions
                              </span>
                          <span class="m-dropdown__header-subtitle">
                                Shortcuts
                              </span>
                        </div>
                        <div class="m-dropdown__body m-dropdown__body--paddingless">
                          <div class="m-dropdown__content">
                            <div class="m-scrollable" data-scrollable="false" data-max-height="380" data-mobile-max-height="200">
                              <div class="m-nav-grid m-nav-grid--skin-light">
                                <div class="m-nav-grid__row">
                                  <a href="#" class="m-nav-grid__item">
                                    <i class="m-nav-grid__icon flaticon-file"></i>
                                    <span class="m-nav-grid__text">
                                          Generate Report
                                        </span>
                                  </a>
                                  <a href="#" class="m-nav-grid__item">
                                    <i class="m-nav-grid__icon flaticon-time"></i>
                                    <span class="m-nav-grid__text">
                                          Add New Event
                                        </span>
                                  </a>
                                </div>
                                <div class="m-nav-grid__row">
                                  <a href="#" class="m-nav-grid__item">
                                    <i class="m-nav-grid__icon flaticon-folder"></i>
                                    <span class="m-nav-grid__text">
                                          Create New Task
                                        </span>
                                  </a>
                                  <a href="#" class="m-nav-grid__item">
                                    <i class="m-nav-grid__icon flaticon-clipboard"></i>
                                    <span class="m-nav-grid__text">
                                          Completed Tasks
                                        </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                    <a href="#" class="m-nav__link m-dropdown__toggle">
                      <span class="m-topbar__userpic m--hide">
                            <img src="assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless m--img-centered" alt=""/>
                          </span>
                      <span class="m-nav__link-icon m-topbar__usericon">
                            <span class="m-nav__link-icon-wrapper">
                              <i class="flaticon-user-ok"></i>
                            </span>
                      </span>
                      <span class="m-topbar__username m--hide">
                            Nick
                          </span>
                    </a>
                    <div class="m-dropdown__wrapper">
                      <span class="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                      <div class="m-dropdown__inner">
                        <div class="m-dropdown__header m--align-center">
                          <div class="m-card-user m-card-user--skin-light">
                            <div class="m-card-user__pic">
                              <img src="assets/app/media/img/users/user4.jpg" class="m--img-rounded m--marginless" alt="" />
                            </div>
                            <div class="m-card-user__details">
                              <span class="m-card-user__name m--font-weight-500">
                                    Mark Andre
                                  </span>
                              <a href="" class="m-card-user__email m--font-weight-300 m-link">
                                    mark.andre@gmail.com
                                  </a>
                            </div>
                          </div>
                        </div>
                        <div class="m-dropdown__body">
                          <div class="m-dropdown__content">
                            <ul class="m-nav m-nav--skin-light">
                              <li class="m-nav__section m--hide">
                                <span class="m-nav__section-text">
                                      Section
                                    </span>
                              </li>
                              <li class="m-nav__item">
                                <a href="profile.html" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-profile-1"></i>
                                  <span class="m-nav__link-title">
                                        <span class="m-nav__link-wrap">
                                          <span class="m-nav__link-text">
                                            My Profile
                                          </span>
                                  <span class="m-nav__link-badge">
                                            <span class="m-badge m-badge--success">
                                              2
                                            </span>
                                  </span>
                                  </span>
                                  </span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="profile.html" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-share"></i>
                                  <span class="m-nav__link-text">
                                        Activity
                                      </span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="profile.html" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-chat-1"></i>
                                  <span class="m-nav__link-text">
                                        Messages
                                      </span>
                                </a>
                              </li>
                              <li class="m-nav__separator m-nav__separator--fit"></li>
                              <li class="m-nav__item">
                                <a href="profile.html" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-info"></i>
                                  <span class="m-nav__link-text">
                                        FAQ
                                      </span>
                                </a>
                              </li>
                              <li class="m-nav__item">
                                <a href="profile.html" class="m-nav__link">
                                  <i class="m-nav__link-icon flaticon-lifebuoy"></i>
                                  <span class="m-nav__link-text">
                                        Support
                                      </span>
                                </a>
                              </li>
                              <li class="m-nav__separator m-nav__separator--fit"></li>
                              <li class="m-nav__item">
                                <a href="snippets/pages/user/login-1.html" class="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">
                                      Logout
                                    </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END: Topbar -->
          </div>
        </div>
      </div>
    </header>
    <!-- END: Header -->
    <!-- begin::Body -->
    <div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
      <!-- BEGIN: Left Aside -->
      <button class="m-aside-left-close  m-aside-left-close--skin-light " id="m_aside_left_close_btn">
            <i class="la la-close"></i>
          </button>
      <div id="m_aside_left" class="m-grid__item  m-aside-left  m-aside-left--skin-light ">
        <!-- BEGIN: Aside Menu -->
        <div id="m_ver_menu" class="m-aside-menu  m-aside-menu--skin-light m-aside-menu--submenu-skin-light " data-menu-vertical="true" m-menu-scrollable="1" m-menu-dropdown-timeout="500">
          <ul class="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
            <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover">
              <a href="javascript:;" class="m-menu__link m-menu__toggle">
                <i class="m-menu__link-icon flaticon-layers"></i>
                <span class="m-menu__link-text">
                      Resources
                    </span>
                <i class="m-menu__ver-arrow la la-angle-right"></i>
              </a>
              <div class="m-menu__submenu ">
                <span class="m-menu__arrow"></span>
                <ul class="m-menu__subnav">
                  <li class="m-menu__item  m-menu__item--parent" aria-haspopup="true">
                    <span class="m-menu__link">
                          <span class="m-menu__link-text">
                            Космос
                          </span>
                    </span>
                  </li>
                  <li class="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1">
                    <a href="inner.html" class="m-menu__link ">
                      <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span></span>
                          </i>
                      <span class="m-menu__link-text">
                            Timesheet
                          </span>
                    </a>
                  </li>
                  <li class="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1">
                    <a href="inner.html" class="m-menu__link ">
                      <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span></span>
                          </i>
                      <span class="m-menu__link-text">
                            Payroll
                          </span>
                    </a>
                  </li>
                  <li class="m-menu__item " aria-haspopup="true" m-menu-link-redirect="1">
                    <a href="inner.html" class="m-menu__link ">
                      <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                            <span></span>
                          </i>
                      <span class="m-menu__link-text">
                            Contacts
                          </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <!-- END: Aside Menu -->
      </div>
      <!-- END: Left Aside -->
      <div class="m-grid__item m-grid__item--fluid m-wrapper">
        <div class="m-content">
          Inner page content goes here
        </div>
      </div>
    </div>
    <!-- end:: Body -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
