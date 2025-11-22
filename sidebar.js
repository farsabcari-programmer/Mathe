// دالة لتحميل القائمة الجانبية
function loadSidebar() {
    const sidebarHTML = `
        <button class="sidebar-toggle" id="sidebarToggle">
            <i class="fas fa-bars"></i>
        </button>
        
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h3>المواد الدراسية</h3>
            </div>
            <ul class="sidebar-menu">
                <li><a href="index.html">
                    <i class="fas fa-home"></i>
                    <span>الصفحة الرئيسية</span>
                </a></li>
                
                <li><a href="analyse3.html">
                    <i class="fas fa-calculator"></i>
                    <span>Analyse 3</span>
                </a></li>
                
                <li><a href="algebre3.html">
                    <i class="fas fa-border-all"></i>
                    <span>Algèbre 3</span>
                </a></li>
                
                <li><a href="analyse-numerique-TP.html">
                    <i class="fas fa-chart-line"></i>
                    <span>Analyse Numérique TP</span>
                </a></li>

                <li><a href="analyse-numerique.html">
                    <i class="fas fa-chart-line"></i>
                    <span>Analyse Numérique TD</span>
                </a></li>
                
                <li><a href="langage.html">
                    <i class="fas fa-code"></i>
                    <span>Langage</span>
                </a></li>
                
                <li><a href="logique.html">
                    <i class="fas fa-project-diagram"></i>
                    <span>Logique</span>
                </a></li>
                
                <li><a href="topologie.html">
                    <i class="fas fa-shapes"></i>
                    <span>Topologie</span>
                </a></li>
            </ul>
        </div>
    `;
    
    // إضافة القائمة الجانبية إلى الصفحة
    const sidebarContainer = document.querySelector('[data-sidebar="load"]');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
        initializeSidebar();
    }
}

// دالة لتهيئة وظائف القائمة الجانبية
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const menuItems = document.querySelectorAll('.sidebar-menu a');
    
    // فتح وإغلاق القائمة الجانبية
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        sidebarOverlay.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    });
    
    // إغلاق القائمة عند النقر على الخلفية
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // إغلاق القائمة عند النقر على رابط (للتجربة المحسنة على الجوال)
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // تحديث العنصر النشط
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // إغلاق القائمة بمفتاح ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            sidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// دالة لتحديث الرابط النشط بناءً على الصفحة الحالية
function updateActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.sidebar-menu a');
    
    menuItems.forEach(item => {
        const itemHref = item.getAttribute('href');
        if (itemHref === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// تهيئة القائمة الجانبية عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    loadSidebar();
    
    // تحديث الرابط النشط بعد تحميل القائمة
    setTimeout(updateActiveMenuItem, 100);
});