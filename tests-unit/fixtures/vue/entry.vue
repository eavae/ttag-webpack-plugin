<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
import { t } from "ttag";

export default {
  data() {
    return {
      msg: t`Hello world!`
    };
  }
};
</script>

<style>
.example {
  color: red;
}
</style>
