<template>

  <div class="app-container">
    <el-row>
            <el-button round @click="back()" style="margin:20px;float:right">Back to Deparment</el-button>
      </el-row>
    <el-form ref="ruleForm" :model="ruleForm" label-width="120px">
      <el-form-item label="Name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="Status">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>
      <el-form-item label="Work type">
        <el-radio-group v-model="ruleForm.type">
            <el-radio label="Full Time"></el-radio>
          <el-radio label="Part Time"></el-radio>
            <el-radio label="Day"></el-radio>
          <el-radio label="Night"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row type="flex" class="row-bg">
        <el-col :span="8">
      <el-form-item label="Department">
        <el-select v-model="ruleForm.department" placeholder="Select your Department">
          <el-option label="IT" value="it"></el-option>
          <el-option label="Human Resource" value="hr"></el-option>
          <el-option label="Sales" value="sales"></el-option>
        </el-select>
      </el-form-item>
      </el-col>
         <el-col :span="8">
             <el-form-item label="Services">
      <el-cascader expand-trigger="hover" :options="options" v-model="ruleForm.services"  placeholder="Select your level">
      </el-cascader>
      </el-form-item>
      </el-col>
      <el-col :span="8">
      <el-form-item label="Level">
        <el-select v-model="ruleForm.level" placeholder="Select your Department">
          <el-option label="1" value="one"></el-option>
          <el-option label="2" value="two"></el-option>
          <el-option label="3" value="three"></el-option>
        </el-select>
      </el-form-item>
       </el-col>
      </el-row>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">Edit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
import { addPost } from '@/api/user.js';
export default {
  data() {
       return {
      options: [{
          value: 'software',
          label: 'Software',
          children: [{
            value: 'development',
            label: 'Development',
          }, {
            value: 'network',
            label: 'Network',
          }]
        }, {
          value: 'hardware',
          label: 'Hardware',
          children: [{
            value: 'cpu',
            label: 'CPU'
          }, {
            value: 'monitor',
            label: 'Monitor'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
      ruleForm: {
        id: '',
        name: '',
        description: '',
        status:'',
        departmentid: '',
        department:''
      },
     }
    },
  methods: {
    submitForm(formName) {
    //  console.log('Hello World');
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        this.loading = true;
                        //NProgress.start();
                        var userParams = { 
                          id: this.ruleForm.id, 
                          Name: this.ruleForm.name, 
                          Description: this.ruleForm.desc, 
                          department: this.ruleForm.department, 
                        };
                        addPost(userParams).then((res) => {
                            this.$router.back();
                            this.loading = false;
                            //NProgress.done();
                            this.$message({
                                type: 'success',
                                message: 'User Add completed'
                            });
                        });
                    } else {
                        this.$message({
                            type: 'info',
                            message: 'User Add Canceled'
                        });
                        return false;
                    }
                });
            },
    back() {
     this.$router.push({ path: 'table'});
    },
     resetForm(formName) {
                this.$refs[formName].resetFields();
            },
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

