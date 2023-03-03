import React from 'react'
import { NavLink } from 'react-router-dom'
import SideMenu from './ReportsSideMenu'
import { Card, CardBody } from 'reactstrap'

const Reports = () => {

    return (
        <div className='report-container'>
            <SideMenu link1='/san-reports/dashboard' link2='/san-reports/reports' />
        <div id='reports-container' className='w-100'>
        <div className='text-eee1'>Reports</div>
        <div className='text-fff1'>Track and manage your business stats here. <NavLink to='/san-reports/reports'>Learn more</NavLink></div>
        <div className='reports-main-container d-flex'>
            <div className='row-1-aaa2'>
            <div className="box-1-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Finances</div>
                        <div className='text-bbb2'>Monitor your overall finances including sales, refunds, taxes
                         payments and more</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/finances-summary'>Finances summary</NavLink>
                            <NavLink to='/san-reports/payment-summary'>Payments summary</NavLink>
                             <NavLink to='/san-reports/payment-transactions'>Payment transactions</NavLink>
                             <NavLink to='/san-reports/taxes-summary'>Taxes summary</NavLink>
                             <NavLink to='/san-reports/service-charges'>Service charges</NavLink>
                             <NavLink to='/san-reports/tips-collected'>Tips collected</NavLink>
                             <NavLink to='/san-reports/discount-summary'>Discount summary</NavLink>
                             <NavLink to='/san-reports/outstanding-invoices'>Outstanding sales</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-3-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Inventory</div>
                        <div className='text-bbb2'>Monitor product stock levels and adjustments made, analyse product
                         sales performance, consumption costs and more</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/stock-on-hand'>Stock on hand</NavLink>
                            <NavLink to='/san-reports/product-sale-performance'>Product sales performance</NavLink>
                             <NavLink to='/san-reports/stock-movement-log'>Stock movement log</NavLink>
                             <NavLink to='/san-reports/stock-movement-summary'>Stock movement summary</NavLink>
                             <NavLink to='/san-reports/internal-stock-consumption'>Product consumption</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-4-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Appointments</div>
                        <div className='text-bbb2'>View projected revenues of upcoming appointments,
                         track cancellation rates and reasons</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/appointments-list'>Appointments list</NavLink>
                            <NavLink to='/san-reports/appointments-summary'>Appointments summary</NavLink>
                             <NavLink to='/san-reports/appointments-cancellations'>Appointment cancellations</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-6-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Clients</div>
                        <div className='text-bbb2'>Gain insights into how clients interact with
                         your business and who your top spenders are</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/client-list'>Client list</NavLink>
                            <NavLink to='/san-reports/client-retention'>Client retention</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            </div>
            <div className='row-1-aaa2'>
            <div className="box-2-bbb2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                    <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Sales</div>
                        <div className='text-bbb2'>Analyse the performance of your business by comparing sales across products,
                             team members, channels and more</div>
                             </div>
                             <div className='link-wrapper-aaa2'>
                             <NavLink to='/san-reports/sales-by-item'>Sales by item</NavLink>
                             <NavLink to='/san-reports/sales-by-type'>Sales by type</NavLink>
                             <NavLink to='/san-reports/sales-by-service'>Sales by service</NavLink>
                             <NavLink to='/san-reports/sales-by-product'>Sales by product</NavLink>
                             <NavLink to='/san-reports/sales-by-location'>Sales by location</NavLink>
                             <NavLink to='/san-reports/sales-by-channel'>Sales by channel</NavLink>
                             <NavLink to='/san-reports/sales-by-client'>Sales by client</NavLink>
                             <NavLink to='/san-reports/sales-by-team-member-breakdown'>Sales by team member breakdown</NavLink>
                             <NavLink to='/san-reports/sales-by-team-member'>Sales by team member</NavLink>
                             <NavLink to='/san-reports/sales-by-hour'>Sales by hour</NavLink>
                             <NavLink to='/san-reports/sales-by-hour-of-day'>Sales by hour of day</NavLink>
                             <NavLink to='/san-reports/sales-by-day'>Sales by day</NavLink>
                             <NavLink to='/san-reports/sales-by-month'>Sales by month</NavLink>
                             <NavLink to='/san-reports/sales-by-quarter'>Sales by quarter</NavLink>
                             <NavLink to='/san-reports/sales-by-year'>Sales by year</NavLink>
                             <NavLink to='/san-reports/sales-log'>Sales log</NavLink>
                             </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-5-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Vouchers</div>
                        <div className='text-bbb2'>Track your total outstanding liability as well as
                         voucher sales and redemption activity</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/vouchers-outstanding-sales'>Vouchers outstanding balance</NavLink>
                            <NavLink to='/san-reports/voucher-sales'>Voucher sales</NavLink>
                             <NavLink to='/san-reports/voucher-redemptions'>Voucher redemptions</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-7-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Deposits</div>
                        <div className='text-bbb2'>Track your total outstanding balance as well as deposits activity
                        </div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/deposits-outstanding-balance'>Deposits outstanding balance</NavLink>
                            <NavLink to='/san-reports/deposits-activity'>Deposits activity</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="box-8-aaa2">
                <Card className='card-aaa2'>
                    <CardBody className='p-0'>
                        <div className='card-top-aaa2'>
                        <div className='text-aaa2'>Team</div>
                        <div className='text-bbb2'>View your team's performance, hours worked as well
                         as commission and tip earnings</div>
                         </div>
                        <div className='link-wrapper-aaa2'>
                            <NavLink to='/san-reports/team-member-working-hour'>Team members working hours</NavLink>
                            <NavLink to='/san-reports/tips-by-team-member'>Tips by team member</NavLink>
                             <NavLink to='/san-reports/team-members-commission-summary'>Team members commission summary</NavLink>
                             <NavLink to='/san-reports/team-members-commission-detailed'>Team members commission detailed</NavLink>
                        </div>
                    </CardBody>
                </Card>
            </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Reports