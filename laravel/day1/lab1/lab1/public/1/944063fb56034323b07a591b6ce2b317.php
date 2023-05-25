<?php $__env->startSection('title'); ?>
    create post
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    
<?php echo Form::open(['url' => 'students' , 'method' =>'post']); ?>

    

        <div class="form-group">
            <label for="exampleFormControlInput1" class="form-lable">IDno</label>
            <?php echo Form::text('idno', null, ['class' => 'form-control']); ?>

        </div>

        <div class="form-group"> 
            <label for="exampleFormControlInput1" class="form-lable">Name</label>
            <?php echo Form::text('name', null, ['class' => 'form-control']); ?>

        </div>

        <div class="form-group">
            <label for="exampleFormControlInput1" class="form-lable">Age</label>
            <?php echo Form::number('age', 'value'); ?>

        </div>

        <?php echo Form::submit('Add', ['class'=>'btn btn-success btn-block']); ?>

        

<?php echo Form::close(); ?>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/islam/ITI/ITI-Scholorship-Subjects-labs/laravel/day1/lab1/lab1/resources/views/post/create.blade.php ENDPATH**/ ?>