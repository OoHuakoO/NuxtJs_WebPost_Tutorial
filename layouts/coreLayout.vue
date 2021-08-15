<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
          <nuxt-link class="nav-item nav-link" to="/">หน้าแรก</nuxt-link>
        <nuxt-link class="nav-item nav-link" to="/posts">บทความ</nuxt-link>
        <nuxt-link class="nav-item nav-link" to="/admin">ผู้เขียน</nuxt-link>
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>
