<template>
    <div class="details__markup--item">
        <div class="details__markup--flag">
            <span :class="`${classes} ${code}`"></span>
        </div>
        <code class="details__markup--code" ref="code">&lt;span class="{{classes}} {{code}}"&gt;&lt;/span&gt;</code>
        <div class="details__markup--copy is-copied" v-if="copied">copied!</div>
        <button class="details__markup--copy" @click="copyCode($event)" v-else><i class="icon-copy"></i></button>
    </div>
</template>

<script>
export default {
  name: "details-markup",
  props: ["code", "classes"],
  data: () => {
      return {
          copied: false
      }
  },
  methods: {
    copyCode(){
        const content = this.$refs.code.textContent;
        this.$copyText(content).then(e => {
          this.copied = true;
          setTimeout(() => this.copied = false, 1000);
        })
    }
  }
};
</script>