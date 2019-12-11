<template>
  <div>
    <select 
      class="Select"
      :value="value"
      :name='name'
      @input="$emit('input', $event.target.value)"
    >
        <option v-for="(option,index) in options" :key="index" :value="option.value">
            {{option.value}}
        </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "textAreaGroup",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: String,
    name: String,
    error: String,
    options:Array,
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.Select{
    border:1px solid #fff;
    width:350px;
    height:30px;
    margin-bottom:10px;
    border-radius: 3px;
    text-indent:10px;
    font-size:12px;
    background:transparent;
    color:#fff;  
    font-weight:normal;
}
option{
    color:black;
    font-size: 12px;
}
</style>