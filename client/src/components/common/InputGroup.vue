<template>
  <div>
    <input 
      class="Input"
      :value="value"
      :placeholder="placeholder"
      :name='name'
      @input="$emit('input', $event.target.value)"
    />
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
    value:String,
    placeholder: String,
    name: String,
    error: String,
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style scoped>
.Input{
    border:1px solid #fff;
    width:300px;
    height:30px;
    margin-top:10px;
    border-radius: 3px;
    text-indent:10px;
    font-size:12px;
    background:transparent;
    color:#fff;  
    font-weight:bold;
}
/*设置placeholder字体*/
::-webkit-input-placeholder { /* WebKit browsers */
  color: #fff;
  font-size: 12px;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #fff;
  font-size: 12px;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #fff;
  font-size: 12px;
} 
</style>