@extends('layouts.master')
@section('content')
    <div class="container-fluid">

        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard 2</h1>

        </div>

        <div class="row">
            <div class="col-lg-12">
                <table class="table">
                    <thead>
                    <th></th>
                    <th>Male</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Female</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="font-weight-bold">OCC Level</td>
                        <td class="font-weight-bold">African</td>
                        <td class="font-weight-bold">Coloured</td>
                        <td class="font-weight-bold">Indian/Asian</td>
                        <td class="font-weight-bold">White</td>
                        <td class="font-weight-bold">Male Total</td>
                        <td class="font-weight-bold">African</td>
                        <td class="font-weight-bold">Coloured</td>
                        <td class="font-weight-bold">Indian/Asian</td>
                        <td class="font-weight-bold">White</td>
                        <td class="font-weight-bold">Female Total</td>
                        <td class="font-weight-bold">Grand Total</td>
                    </tr>
                    <tr>
                        <td>Junior management</td>
                        <td>1100</td>
                        <td>11</td>
                        <td>6</td>
                        <td>635</td>
                        <td>1752</td>
                        <td>373</td>
                        <td>17</td>
                        <td>8</td>
                        <td>173</td>
                        <td>571</td>
                        <td>2323</td>
                    </tr>
                    <tr>
                        <td>Middle management</td>
                        <td>177</td>
                        <td>13</td>
                        <td>22</td>
                        <td>220</td>
                        <td>432</td>
                        <td>76</td>
                        <td>5</td>
                        <td>14</td>
                        <td>91</td>
                        <td>186</td>
                        <td>618</td>
                    </tr>
                    <tr>
                        <td>Semi skilled</td>
                        <td>2347</td>
                        <td>6</td>
                        <td>2</td>
                        <td>114</td>
                        <td>2469</td>
                        <td>465</td>
                        <td>8</td>
                        <td>1</td>
                        <td>15</td>
                        <td>489</td>
                        <td>2958</td>
                    </tr>
                    <tr>
                        <td>Senior management</td>
                        <td>21</td>
                        <td>4</td>
                        <td>5</td>
                        <td>49</td>
                        <td>79</td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                        <td>3</td>
                        <td>10</td>
                        <td>89</td>
                    </tr>
                    <tr>
                        <td>Top management</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>Unskilled</td>
                        <td>344</td>
                        <td>2</td>
                        <td>0</td>
                        <td>6</td>
                        <td>352</td>
                        <td>103</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                        <td>103</td>
                        <td>455</td>
                    </tr>
                    <tr>
                        <td class="font-weight-bold">Grand Total</td>
                        <td class="font-weight-bold">3990</td>
                        <td class="font-weight-bold">36</td>
                        <td class="font-weight-bold">35</td>
                        <td class="font-weight-bold">1025</td>
                        <td class="font-weight-bold">5086</td>
                        <td class="font-weight-bold">1019</td>
                        <td class="font-weight-bold">32</td>
                        <td class="font-weight-bold">27</td>
                        <td class="font-weight-bold">282</td>
                        <td class="font-weight-bold">1360</td>
                        <td class="font-weight-bold">6446</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-6">
                <div class="card ">

                    <div class="card-body">
                        <canvas id="maleStatsChart" ></canvas>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card ">

                    <div class="card-body">
                        <canvas id="femaleStatsChart2" ></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-6">
                <div class="card ">

                    <div class="card-body">
                        <canvas id="maleStatsChart2" ></canvas>

                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card ">

                    <div class="card-body">
                        <canvas id="femaleStatsChart" ></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-lg-6">
                <div class="card ">

                    <div class="card-body">
                        <canvas id="occ-level"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mb-1">

                    <div class="card-body">
                        <h6 class="float-center">African</h6>
                        <table class="table">
                            <tr>
                                <td>Male </td>
                                <td class="badge badge-info">3390</td>
                                <td>Female </td>
                                <td class="badge badge-danger">1019</td>
                            </tr>

                        </table>
                        <h6 class="float-center">Coloured</h6>
                        <table class="table mb-4">
                            <tr>
                                <td>Male </td>
                                <td class="badge badge-info">36</td>
                                <td>Female </td>
                                <td class="badge badge-danger">32</td>
                            </tr>

                        </table>
                        <h6 class="float-center">Indian/Asian</h6>
                        <table class="table ">
                            <tr>
                                <td>Male </td>
                                <td class="badge badge-info">35</td>
                                <td>Female </td>
                                <td class="badge badge-danger">27</td>
                            </tr>

                        </table>
                        <h6 class="float-center">White</h6>
                        <table class="table">
                            <tr>
                                <td>Male </td>
                                <td class="badge badge-info">1025</td>
                                <td>Female </td>
                                <td class="badge badge-danger">6446</td>
                            </tr>

                        </table>
                    </div>
                </div>



            </div>
        </div>




    </div>
@endsection