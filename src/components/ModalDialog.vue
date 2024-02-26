<template>
    <div v-if="this.IsModal" class="modal" >
      <div class="modal-container">
        <div class="modal-body">
          <p>Клиент зарегистрирован!</p>
          <div @click="closeModal" class="modal-close">&#10006;</div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  data() {
    return {
      IsModal: true
    }
    
  },
  methods: {
    closeModal() {
      this.IsModal = false;
      this.$emit('modalClosed'); 
    }
  }
}
</script>  


<style lang="scss">
.modal {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  .modal-container {
    display: flex;
    height: 100%;
    width: 100%;
    .modal-body {
      margin: auto;
      width: 300px;
      background-color: #fff;
      border-radius: 10px;
      text-align: center;
      position: relative;
      padding: 50px;
      p {
        font-size: 22px;
        font-family: "Nunito", sans-serif;
        color: #000;
      }
      .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>