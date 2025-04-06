<script lang="tsx">
export default defineComponent({
  props: {
    formConfig: {
      type: Array,
      default: [],
    },
    labelCol: {
      type: Object,
      default: { style: { width: '100px' } }
    },
    defaultValue:{
      type:Object,
      default:{}
    }
  },
  setup(props, context) {
    const state = reactive({
      formData: {},
    })
    //表单的实例
    const commonRef = ref()
    const methods = {
      initForm(defaultValue={},title='新增'){
        state.title=title
        state.visible=true
        state.defaultValue=defaultValue
      },
      onSubmit() {
        return commonRef.value
          .validate()
          .then((values: any) => {
            let submitData = JSON.parse(JSON.stringify(state.formData))
            return submitData
          })
          .catch((info: any) => {
            commonRef.value.scrollToField(info.errorFields[0]?.name?.[0], {
              behavior: 'smooth',
              block: 'center',
            })
          })
      },
      handleHide(hide: boolean | Function) {
        if (typeof hide !== 'function') {
          return hide
        } else {
          return hide(state.formData)
        }
      },
      renderFormItem(item: any) {
        const type = item.type
        const common = {
          placeholder: '请填写' + item.label,
          disabled: item.disabled,
          ...item.attrs,
        }
        // 0540
        // 表单校验
        let rules: any = {}
        if (item.req) {
          rules.required = true
          rules.message = '此项为必填项'
        } else {
          rules.required = false
        }
        if (item.validator) {
          delete rules.validator
          rules.validator = item.validator
          rules.trigger = 'change'
        }
        const dom: any = {
          input: () => {
            //   placeholder={'请填写'+ item.label}
            return (
              <a-input
                v-model:value={state.formData[item.key]}
                {...common}
              ></a-input>
            )
          },
          number: () => {
            return (
              <a-input-number
                v-model:value={state.formData[item.key]}
                {...common}
              ></a-input-number>
            )
          },
          textarea: () => {
            return (
              <a-textarea
                row={3}
                v-model:value={state.formData[item.key]}
                {...common}
              ></a-textarea>
            )
          },
          radio: () => {
            return (
              <a-radio-group
                v-model:value={state.formData[item.key]}
                {...common}
              >
                {item.data?.map((k: any) => {
                  return (
                    <a-radio
                      value={item.custom ? k[item.custom.value] : k.value}
                    >
                      {item.custom ? k[item.custom.label] : k.label}
                    </a-radio>
                  )
                })}
              </a-radio-group>
            )
          },
          checkbox: () => {
            return (
              <a-checkbox-group v-model:value={state.formData[item.key]}  {...common}>
                {item.data?.map((k: any) => {
                  return (
                    <a-checkbox
                      value={item.custom ? k[item.custom.value] : k.value}
                    >
                      {item.custom ? k[item.custom.label] : k.label}
                    </a-checkbox>
                  )
                })}
              </a-checkbox-group>
            )
          },
          select: () => {
            return (
              <a-select
                v-model:value={state.formData[item.key]} {...common}
                placeholder={'请填写' + item.label}
                options={item.data}
              ></a-select>
            )
          },
          date: () => {
            return (
              <a-date-picker
                v-model:value={state.formData[item.key]}
                format={'YYYY-MM-DD'}
               {...common}
              ></a-date-picker>
            )
          },
          daterange: () => {
            return (
              <a-range-picker
                v-model:value={state.formData[item.key]}
                type="daterange"
               format={'YYYY-MM-DD'}
               {...common} placeholder={['开始时间','结束时间']}
              ></a-range-picker>
            )
          },
          slot:()=>{
            let slot:any=context.slots[item.slotName]?? context?.attrs?.slots[item.slotName]
            return slot(
              formData:state.formData,
              key:item.key
            )
          }
        }

        function handleFormItem(html: HTMLElement) {
          return (
            <a-col span={item.col??24}>
              <a-form-item label={item.label} name={item.key} rules={rules}>
                {html}
              </a-form-item>
            </a-col>
          )
        }
        return handleFormItem(dom[type])
      },
      // 01：40
      async handleAutoWrite(){
        let result:any=state.formData
        props.formConfig.forEach((item:any)=>{
          let type=item.type
          switch(type){
            case 'input':
              case 'textarea':
                result[item.key]=createRandomChinese()
                break
              case 'number':
                result[item.key]=createRandomNumber()
                break
              case 'daterange':
                var format=item?.attrs?.format ?? 'YYYY-MM-DD'
                result[item.key]=[dayjs().startOf('year').frormat(format),dayjs().endOf('year')]
                break
              case 'radio':
              case 'checkbox':
                if(item.data.length>0){
                  var randomIndex=Math.floor(Math.random()*item.data.length)
                  result[item.key]=item.custom?item.data[randomIndex][item.custom.value]:item.data[randomIndex].value
                  if(type=='checkbox'){
                    result[item.key]=[result[item.key]]
                  }
                }
                break;
              case 'select':
                if(ite,.data.length>0){
                  var randomIndex=Math.floor(Math.random()*item.data.length)
                  result[item.key]=item.attrs?.fieldName.value?
                  item.data[randomIndex][item?.attrs?.fieldName.value]:
                  item.data[randomIndex].value
                }else{
                  item?.attrs?.onClick && item.attrs.onClick()
                  (function checkData(){
                    if(item.data.length){
                      var randomIndex=Math.floor(Math.random()*item.data.length)
                      result[item.key]=item?.attrs?.fieldName?
                      item.data[randomIndex][item?.attrs?.fieldName.value]:
                      item.data[randomIndex].value
                    }else{
                      setTimeout(checkData,100)
                    }
                  })()
                }
                break;

          }
        })
      }
    }
    return {
      ...toRefs(state),
      ...methods,
      commonRef,
    }
  },
  render() {
    return (
      <div>
        <a-form ref="commonRef" labelCol={this.$props.labelCol}  model={this.formData}>
        <a-row gutter={24}>
          {
            this.$props.formConfig.map((item:any) => {
            let formItem = this.handleHide(item.hide)
              ? ''
              : this.renderFormItem(item)
            return formItem
            })
          }
        </a-row>
        </a-form>
      </div>
    )
  },
})
</script>
<template></template>
