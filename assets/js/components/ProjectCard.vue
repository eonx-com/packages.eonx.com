<script>
    export default {
        name: 'ProjectCard',
        props: {
            project: Object
        },
        data: function () {
            return {
                languageIcon: 'fab fa-' + this.project.language + ' fa-stack-1x fa-inverse'
            }
        }
    }
</script>

<template>
    <div class="col-12 col-md-6 col-lg-6 py-3 project-card">
        <div class="card shadow-sm">
            <div class="project-language-container">
                    <span class="fa-stack">
                        <i class="fas fa-circle fa-stack-2x"></i>
                        <i :class="languageIcon"></i>
                    </span>
            </div>
            <div class="card-body">
                <h5 class="card-title mb-3">
                    <span class="card-title-text project-search">{{ project.name }}</span>
                </h5>
                <div class="card-text">
                    {{ project.description }}
                </div>
                <a class="card-link-mask" :href="project.docsUrl"></a>
            </div><!--//card-body-->
            <div class="card-footer">
                <div class="float-left">
                    <i :class="project.typeIcon" :title="project.type"></i>
                </div>
                <div class="float-right">
                    <a :href="project.remoteOriginUrl"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div><!--//card-->
    </div><!--//col-->
</template>
