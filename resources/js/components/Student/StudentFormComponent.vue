<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <el-page-header @back="goback" :content="`Category - ${scope}`"></el-page-header>
            </div>

            <div>
                <el-form :model="model" :rules="rules" ref="studentform">
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <el-form-item label="Name" required prop="name"> 
                                <el-input v-model="model.name" placeholder="Student Name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Class" required prop="class"> 
                                <el-input v-model="model.class" placeholder="Class Name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="12">
                            <el-form-item label="Section" required prop="section"> 
                                <el-input v-model="model.section" placeholder="Section Name"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="Email" required prop="email"> 
                                <el-input v-model="model.email" placeholder="Student Email"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="24">
                            <el-button type="success" @click="saveForm('studentform')">Save Student</el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: 'student-form-component',
        props: {
            scope: String,
        },
        mounted() {
            console.log('Component mounted.')
        },
        data() {
            return {
                model:{
                    name: null,
                    class: null,
                    section: null,
                    email: null,
                },
                rules: {

                }
            }
        },
        methods: {
            goback() {
                window.location.href = "/students"
            },
            saveForm(formname){
                this.$refs[formname].validate( (valid) => {
                    if(valid){
                        // Create a plain object from the reactive model object
                        const payload = { ...this.model };
                        this.$store.dispatch('saveStudent', payload);
                    }
                });
            }
        }
    }
</script>
