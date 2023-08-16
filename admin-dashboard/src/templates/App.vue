<script lang="ts" setup>
import { onMounted } from 'vue'
import Appbar from './AppBar.vue'
import Sidebar from './SideBar.vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  const sidebarToggle = document.querySelector('#sidebarToggle')
  const sidebarToggleTop = document.querySelector('#sidebarToggleTop')

  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function () {
      
      document.body.classList.toggle('sidebar-toggled')
      document.querySelector('.sidebar')?.classList.toggle('toggled')

      if (document.querySelector('.sidebar')?.classList.contains('toggled')) {
        document.querySelectorAll('.sidebar .collapse').forEach((collapse) => {
          collapse.classList.remove('show')
        })
      }
    })
  }

  if (sidebarToggleTop) {
    sidebarToggleTop.addEventListener('click', function () {
      document.body.classList.toggle('sidebar-toggled')
      document.querySelector('.sidebar')?.classList.toggle('toggled')

      if (document.querySelector('.sidebar')?.classList.contains('toggled')) {
        document.querySelectorAll('.sidebar .collapse').forEach((collapse) => {
          collapse.classList.remove('show')
        })
      }
    })
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 768) {
      document.querySelectorAll('.sidebar .collapse').forEach(function (element) {
        element.classList.remove('show')
      })
    }

    if (
      window.innerWidth < 480 &&
      !document.querySelector('.sidebar')?.classList.contains('toggled')
    ) {
      document.body.classList.add('sidebar-toggled')
      document.querySelector('.sidebar')?.classList.add('toggled')
      document.querySelectorAll('.sidebar .collapse').forEach(function (element) {
        element.classList.remove('show')
      })
    }
  })
})
</script>

<template>
  <Sidebar></Sidebar>
  <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Appbar></Appbar>
      <div class="container-fluid">
        <RouterView />
      </div>
    </div>
  </div>
  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
</template>
