@extends('layouts.master')
@section('content')
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Projects</h1>
            <!--a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a-->
        </div>

        <!-- Content Row -->


        <div class="card ">
            <div class="card-header py-3">
               <div class="float-left">
                   <h6 class="m-0 font-weight-bold text-primary">Invoice Listing</h6>
               </div>
                <div class="float-right">
                    <a href="#" class="float-right d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Download Invoice</a>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                        <tr>
                            <th>Invoice</th>
                            <th>Invoice Date</th>
                            <th>Due Date</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Actions</th>

                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td>INV-455884</td>
                            <td>2019-01-07</td>
                            <td>2019-01-31</td>
                            <td>R25000,00</td>
                            <td>
                                <span class="bg-warning text-white">Pending</span>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td>INV-75499</td>
                            <td>2019-01-30</td>
                            <td>2019-01-31</td>
                            <td>R35000,00</td>
                            <td>
                                <span class="bg-warning text-white">Pending</span>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td>INV-748952</td>
                            <td>2019-01-29</td>
                            <td>2019-01-30</td>
                            <td>R55000,00</td>
                            <td>
                                <span class="bg-success text-white">Finished</span>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>

                        </tr>
                        <tr>
                            <td>INV-32544</td>
                            <td>2019-01-01</td>
                            <td>2019-02-05</td>
                            <td>R20000,00</td>
                            <td>
                                <span class="bg-dark text-white">Not Started</span>
                            </td>
                            <td>
                                <button class="btn btn-info btn-sm">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </td>

                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    </div>
@endsection