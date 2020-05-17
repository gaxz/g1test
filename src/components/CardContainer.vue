<template>
  <div class="card-container">
    <div class="header">
      <span class="header-item">Toggle replacing</span>
      <b-form-checkbox class="header-item" id="replace-toggle" v-model="isReplaceEnabled" switch size="lg" />
      <b-button variant="primary" @click="$router.push('new')">New Card</b-button>
    </div>
      
    <draggable v-bind="draggableOptions" class="list" v-model="cards" draggable=".list-item">
      <div class="list-item" v-for="(data, index) in cards" :key="index" >
        <Card v-bind:title="data.title" v-bind:content="data.content" @showModal="showModal" />
      </div>
    </draggable>

    <modals-container />
  </div>
</template>

<script>
import { REPLACE_TOGGLE, CARD_REPLACE } from '@/store/mutations.type';
import Card from './Card';
import CardModal from './CardModal';
import draggable from 'vuedraggable';

/**
 * This Component renders an array of entities ( @see Card ) aquired from storage. 
 * And provides a functionality to sort and view them through dynamic modal 
 * @see CardModal
 * @see vue-js-modal
 */
export default {
  name: 'CardContainer',
  components: {
    Card,
    draggable
  },
  computed: {
    isReplaceEnabled: {
      get() {
        return this.$store.state.settings.isReplaceEnabled;
      },
      set(value) {
        this.$store.commit(REPLACE_TOGGLE, value);
      }
    },
    cards: {
      get() {
        return this.$store.state.cards;
      },
      set(value) {
        return this.$store.commit(CARD_REPLACE, value)
      }
    },
    draggableOptions() {
      return {
        animation: 400,
        disabled: !this.isReplaceEnabled
      }
    }
  },
  methods: {
    showModal(modalData) {
      this.$modal.show(CardModal, modalData)
    }
  }
}
</script>

<style scoped>
.card-container {
  width: 50%;
  margin: 0px auto;
}

.header {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
}

.header-item {
  margin: 5px;
}

.list {
  border: 1px solid;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}

.list-item {
    flex: 0 0 23.6%;
    margin: 5px;
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    min-height: 180px;
    background-color: white;
}
</style>
