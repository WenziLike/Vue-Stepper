// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const app = Vue.createApp({
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      resetBtn: true,
      // isButtonDisabled: false,
      title: '10 Quick-Fire Vue Interview Questions',
      steps: [
        { title: 'What is Vue.js?', text: 'Vue.js is frontend JavaScript framework for building user interfaces with a focus on single-page applications. It promotes “high decoupling” which makes it really easy for developers to create user interfaces and rapid prototyping.' },
        { title: 'What are the benefits of Vue.js?', text: 'Vue.js is lightweight and therefore highly performant. It is developer-friendly, hence easy to learn. It is highly flexible and has great tooling.' },
        { title: 'What is a Vue instance?', text: 'The Vue instance, often referred to as vm in a Vue application is the ViewModel of the MVVM pattern that Vue follows. The Vue instance is the root of a Vue application.' },
        { title: 'What are the differences between v-if and v-show?', text: 'v-if will not render the element in the DOM if the expression evaluates to false. In the case of v-show, it will render the element in the DOM no matter what, but will be hidden if false. v-if supports v-else and v-else-if and can be used inside the <template> element, v-show does not support this.' },
        { title: 'What are Vue components?', text: 'Vue components are reusable Vue instances that have a name. They support the same properties as the root Vue instance such as data, methods, computed, watch, mixins, as well as the lifecycle methods (small variations to how it’s written in a component). Below is an example of a Vue component.' },
        {
          title: 'What is the difference between registering a component locally and globally?', text: 'Registering a component globally allows them to be [re]used throughout the application, even within other components. Local components can only be used in the component that it was registered in.You can register a component globally using Vue.component (name, componentData) and register a component locally by adding the it to the components property of the component you want to add it to.'
        },
        { title: 'What are props?', text: 'Props are custom attributes that you can register to a component. When passed from another component or the root Vue instance, the prop becomes a property of the component you passed it to. You can specify multiple props and define their type as well.' },
        { title: 'How do you implement two-way binding?', text: 'You can achieve two-way binding by specifying the v-model property on the input element. This will make sure that as the element value changes, so will the Vue data property. And if the data property changes, so will the value in the input field.' },
        {
          title: 'What are mixins?', text: 'Mixins are a flexible way that enable function distribution among components. A mixin can contains any option found in a component. When a component references one or more mixins, the options of the mixin will be “mixed” into the component.In the case of data conflicts, the components data property will take precedence.The same goes for methods, components, directives.As for lifecycle hooks of the same name, both will be merged into an array in which the mixin hook will be called before the component hook.'
        },
        { title: 'What is the Vue Router?', text: 'Vue Router is the official router of Vue.js for creating pages with different routes. It supports nested routing, view mapping, and is highly configurable; route params, queries, wildcards.' },
      ]
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex > 0) {
        this.activeIndex--
      }
    },
    reset() {
      // начать заново
      this.activeIndex = 0;
      this.resetBtn = false
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      if (this.lastStep) this.resetBtn = true
      else {
        this.activeIndex = this.activeIndex + 1
      }
    },
    setActive(key) {
      // когда нажимаем на определенный шаг
      // this.activeIndex = key
      if (!this.resetBtn) {
        this.activeIndex = key
      }
    }
  },
  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    selectedStep() {
      return this.activeIndex
    },
    // 2. выключена ли кнопка назад
    isActiveButt() {
      return this.activeIndex > 0 ? this.isButtonDisabled = false : this.isButtonDisabled = true
    },
    // 3. находимся ли мы на последнем шаге
    lastStep() {
      return this.activeIndex + 1 === this.steps.length
    }
  },
})

app.mount('#app')