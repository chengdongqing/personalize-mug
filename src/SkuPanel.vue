<script lang="ts" setup>
import ColorRadio from '@/components/ColorRadio.vue'
import FormItem from '@/components/FormItem.vue'
import RadioGroup from '@/components/RadioGroup.vue'
import { CupProps } from '@/models'

defineProps<{ modelValue: CupProps }>()
</script>

<template>
  <div>
    <div class="title">Woman & Dogs - Personalized Mug</div>
    <div class="price">$19.00</div>
    <div class="option-item option--color">
      <div class="option-title">color</div>
      <ColorRadio v-model="modelValue.cupColor" />
    </div>

    <div class="customization-form">
      <FormItem label="Number of Dogs" required>
        <RadioGroup
          v-model="modelValue.dogCount"
          :options="[
            {
              icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb8187cf94_large.jpeg',
              value: 1
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb80e0e19b_large.jpeg',
              value: 2
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/images/5ebfb803eefad_large.jpeg',
              value: 3
            }
          ]"
        />
      </FormItem>
      <FormItem label="Change Background">
        <RadioGroup
          v-model="modelValue.background"
          :options="[
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_thumbnail.jpg',
              value:
                'https://cdn.teeinblue.com/users/36/cliparts/95/5eb3825ca6932_large.png'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb38264da0e2_thumbnail.jpg',
              value:
                'https://cdn.teeinblue.com/users/36/cliparts/95/5eb38264da0e2_large.png'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/95/5eb382654206d_thumbnail.jpg',
              value:
                'https://cdn.teeinblue.com/users/36/cliparts/95/5eb382654206d_large.png'
            }
          ]"
        />
      </FormItem>
      <FormItem label="Skin Color" required>
        <RadioGroup
          v-model="modelValue.skinColor"
          :options="[
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/78044/609d09c1d727e_thumbnail.jpg',
              value: 'light'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/78044/609d09bb4966b_thumbnail.jpg',
              value: 'dark'
            }
          ]"
        />
      </FormItem>
      <FormItem v-if="modelValue.dogCount === 1" label="Hand Gesture">
        <RadioGroup
          v-model="modelValue.handGesture"
          :options="[
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f408ab3_thumbnail.jpg',
              value: 'holdDrink'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/93/5eb395f65917c_thumbnail.jpg',
              value: 'victory'
            }
          ]"
        />
      </FormItem>
      <FormItem label="Woman Name" required>
        <input
          v-model="modelValue.womanName"
          maxlength="12"
          placeholder="Type a name"
        />
      </FormItem>
      <FormItem label="Choose Font Family">
        <RadioGroup
          v-model="modelValue.fontFamily"
          :options="[
            {
              icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc28afc3d_thumbnail.jpeg',
              value: 'GochiHand'
            },
            {
              icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc40e40f2_thumbnail.jpeg',
              value: 'BubbleBoop'
            },
            {
              icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc352719a_thumbnail.jpeg',
              value: 'Georgia'
            },
            {
              icon: 'https://cdn.teeinblue.com/user/36/cliparts/424976/62a1bc7eece2d_thumbnail.jpeg',
              value: 'BebasNeue'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/424976/652cea0f26eca_thumbnail.webp',
              value: 'Chewy'
            },
            {
              icon: 'https://cdn.teeinblue.com/users/36/cliparts/424976/652cea23effb9_thumbnail.webp',
              value: 'Waltograph'
            }
          ]"
        />
      </FormItem>
      <FormItem label="Choose Text Color">
        <input v-model="modelValue.fontColor" type="color" />
      </FormItem>
    </div>
  </div>
</template>

<style scoped>
.title {
  color: rgb(18, 18, 18);
  font-family: Dosis, serif;
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.price {
  color: var(--color-primary);
  font-size: 2.3rem;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 15px;
}

.option-item {
  margin-bottom: 25px;

  .option-title {
    margin-bottom: 7px;
    text-transform: uppercase;
    font-size: 14px;
    font-family: inherit;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(var(--color-font), 0.75);
  }
}

.customization-form {
  background-color: #f5f8fea3;
  border-radius: 10px;
  padding: 15px;

  input {
    width: 100%;
    height: 40px;
    min-height: 40px;
    padding: 7px 15px 7px 15px;
    background-color: #fff;
    border: 1px solid #d6d6d6;
    border-radius: 3px;
    outline: 0;
    box-shadow: none;
    font-size: 14px;
    transition: border-color 0.3s ease-out;

    &::placeholder {
      font-size: 12px;
    }

    &:focus {
      border-color: var(--color-primary);
    }
  }
}
</style>
