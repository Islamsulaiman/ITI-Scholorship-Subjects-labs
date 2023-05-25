<?php $__env->startSection('title'); ?>
    Students
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    
  <table class="table table-hover table-dark">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">IDno</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Author</th>
        <th scope="col">Update</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <?php $__currentLoopData = $students; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $student): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <tr>
          <th scope="row"><?php echo e($student->id); ?></th>
          <td><?php echo e($student->IDno); ?></td>
          <td><?php echo e($student->name); ?></td>
          <td><?php echo e($student->age); ?></td>
          <td><?php echo e(\App\Models\User::find($student->track_id)->name); ?></td>
          <td>
            <a class="btn btn-primary" href="<?php echo e(route('students.edit', $student->id)); ?>">Update</a>
          </td>
          <td>
            <!-- <a class="btn btn-danger" href="">Delete</a> -->
            <form action="<?php echo e(route('students.delete', $student->id)); ?>" method="post">
              <?php echo method_field('delete'); ?>
              <?php echo csrf_field(); ?>
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>


          </td>
        </tr>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    </tbody>
  </table>


<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/islam/ITI/ITI-Scholorship-Subjects-labs/laravel/day1/lab1/lab1/resources/views/post/index.blade.php ENDPATH**/ ?>