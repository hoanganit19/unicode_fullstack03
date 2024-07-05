<form action="">
    <div class="row">
        <div class="col-3">
            <select name="status" class="form-select">
                <option value="">Tất cả trạng thái</option>
                <option value="active" {{request()->status === 'active' ? 'selected' : ''}}>Kích hoạt</option>
                <option value="inactive" {{request()->status === 'inactive' ? 'selected' : ''}}>Chưa kích hoạt</option>
            </select>
        </div>
        <div class="col-7">
            <input type="search" name="keyword" placeholder="Tìm kiếm..." class="form-control" value="{{request()->keyword}}">
        </div>
        <div class="col-2 d-grid">
            <button class="btn btn-primary">Tìm kiếm</button>
        </div>
    </div>
</form>