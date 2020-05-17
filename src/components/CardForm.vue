<template>
<div class="form-container">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Title:"
        label-for="form-title"
      >
        <b-form-input
          id="form-title"
          v-model="form.title"
          type="text"
          required
          placeholder="Enter title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Content:" label-for="form-content">
        <b-form-textarea
          id="form-content"
          v-model="form.content"
          rows="6"
          required
          placeholder="Enter text"
        ></b-form-textarea>
      </b-form-group>

      <b-button class="mr-1" type="submit" variant="primary">Save</b-button>
      <b-button class="mr-1" variant="primary"  @click="$router.push('/')">Back</b-button>
    </b-form>
  </div>
</template>

<script>
import { CARD_ADD } from '@/store/mutations.type';

/**
 * A form that creates a new Card entity (@see Card) and saves it to storage
 */
export default {
  name: 'CardForm',
  data() {
    return {
      form: {
        title: '',
        content: '',
      }
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$store.commit(CARD_ADD, this.form);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 50%;
  margin: 0px auto;
}
</style>
