<template>
  <div class="col-md-6">
    <div class="card project-card">
      <div class="card-header" style="text-align: center">{{ project.slug }}</div>
      <div class="card-body">
        <p class="card-text">{{ project.description }}</p>
        <div class="card-buttons">
          <a :href="project.githubUrl" target="_blank" class="btn btn-light"><i class="fab fa-github"></i> Github</a>
          <a :href="project.docsPath" class="btn btn-light"><i class="fas fa-file-alt"></i> Docs</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    project: Object
  },
  data: function () {
    return {}
  }
}
</script>
