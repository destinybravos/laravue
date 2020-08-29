<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 justify-content-centered">
                    <div class="card mt-5 mb-5">
                        <div class="card-header">
                            User Login Interface
                        </div>
                        <div class="card-body">
                            <div class="form">
                                <form method="post">
                                    <div class="form-group">
                                        <label for="uname">Username</label>
                                        <input type="text" name="uname" id="uname" class="form-control" placeholder="Enter username">
                                    </div>
                                    
                                    <div class="form-group">
                                        <label for="pass">Password</label>
                                        <input type="password" name="pass" id="pass" class="form-control" placeholder="Enter password">
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="checkbox" name="rem" id="rem">
                                        <label for="rem">Username</label>
                                    </div>
                                    
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary" id="btn-submit">
                                            LOGIN
                                        </button>

                                        <buttonComponent />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import buttonComponent from "./ui/ButtonComponent";

export default {
    components : {
        buttonComponent
    }
}
</script>